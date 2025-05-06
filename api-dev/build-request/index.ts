import vercelGateway, { APIFns } from '../api-utils/vercelGateway'
import {
  TransactionalEmailsApi,
  TransactionalEmailsApiApiKeys,
  SendSmtpEmail,
  ContactsApi,
  ContactsApiApiKeys,
} from '@getbrevo/brevo'
import { generateDeckRequestHtml } from '../api-utils/deckRequestHtml'

export type RequestBodyArgs = {
  firstName: string
  lastName: string
  email: string
  description: string | null
  cardName: string | null
  cardImageUrls: string[] | null
}

const buildRequestHandler: APIFns = {
  POST: async ({ body }) => {
    const transactionalEmailsApiInstance = new TransactionalEmailsApi()
    const contactsApiInstance = new ContactsApi()
    const apiKey = process.env.BREVO_API_KEY

    if (!apiKey) {
      throw new Error('Brevo API key is not set')
    }
    transactionalEmailsApiInstance.setApiKey(
      TransactionalEmailsApiApiKeys.apiKey,
      apiKey,
    )
    contactsApiInstance.setApiKey(ContactsApiApiKeys.apiKey, apiKey)

    const sendSmtpEmail = new SendSmtpEmail()

    const deckRequestBody = body as RequestBodyArgs

    // email request to Jose
    sendSmtpEmail.subject = 'Deck request from NotJustNerdyTv'
    sendSmtpEmail.sender = {
      name: 'NotJustNerdyTv',
      id: 3,
    }
    sendSmtpEmail.cc = [
      {
        email: 'support@notjustnerdytv.com',
        name: 'NotJustNerdyTv',
      },
    ]
    sendSmtpEmail.replyTo = {
      name: 'NotJustNerdyTv',
      email: 'support@notjustnerdytv.com',
    }
    sendSmtpEmail.htmlContent = generateDeckRequestHtml(deckRequestBody)
    sendSmtpEmail.to = [
      // to User
      {
        email: deckRequestBody.email,
        name: `${deckRequestBody.firstName} ${deckRequestBody.lastName}`,
      },
    ]

    try {
      // check if the email is part of the Brevo contact list
      const contactExists = await contactsApiInstance
        .getContactInfo(deckRequestBody.email)
        .catch((error) => {
          if (error.status === 404) {
            console.log('Contact not found, creating new contact')
            return false
          }
        })

      if (!contactExists) {
        // create a new contact
        const contact = {
          email: deckRequestBody.email,
          attributes: {
            FIRSTNAME: deckRequestBody.firstName,
            LASTNAME: deckRequestBody.lastName,
          },
          listIds: [7], // add conact to the deck request list
        }
        await contactsApiInstance.createContact(contact)
        console.log('Contact created successfully')
      }

      const data =
        await transactionalEmailsApiInstance.sendTransacEmail(sendSmtpEmail)
      console.log(
        'API called successfully. Returned data: ' + JSON.stringify(data),
      )
      return {
        status: 200,
        body: {
          message: 'Email sent successfully',
          data,
        },
      }
    } catch (error) {
      console.error('Error sending email:', JSON.stringify(error, null, 2))
      if (error instanceof Error) {
        console.error('Error message:', error.message)
      } else {
        console.error('Error details:', error)
      }
    }

    return {
      status: 500,
      body: {
        message: 'Error sending email',
        error: 'Error sending email',
      },
    }
  },
}

export default vercelGateway(buildRequestHandler)
