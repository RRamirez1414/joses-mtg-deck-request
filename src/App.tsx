import { useState } from 'react'
import './styles/global-styles.css'
import { Navigation, Hero, MediaObject, DeckRequestForm } from './components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AboutMeImage from './assets/aboutme.png'
import DecksImage from './assets/decks.png'
import { ErrorBoundary } from 'react-error-boundary'

/**
 * MVP TODOs
 * - [x] Add a contact form, have the user fill out their name, email, and an optional message.
 * - [x] Add a card selector in the form so the user can pick who to build their deck around. use scryfall api for this
 * - [x] Use Brevo to send the email to me with the form data
 *       - [x] Use Brevo to send the email to the user with a thank you message
 *       - [x] Remove forwarding in support email
 *       - [x] Play around with the contacts API to see if we can avoid the spam filter
 *             see if we can use the contact entity to send an email to after creating it
 * - [x] Add a loading spinner while the form is being submitted / cards are being fetched
 * - [x] Add a thank you dialog after the form is submitted
 * - [x] network error handling
 * - [x] add error boundaries
 * - [x] fix navigation not working from the form page
 * - [ ] dark mode ? show green bubble background
 */

const queryClient = new QueryClient()

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <ErrorBoundary
      fallback={
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Oops! Something went wrong.
          </h1>
          <p className="mt-2 text-gray-700">
            We're sorry for the inconvenience. Please try refreshing the page or
            contact us for assistance.
          </p>
          <p className="mt-4 text-blue-600">
            Email us at{' '}
            <a href="mailto:support@notjustnerdytv.com" className="underline">
              support@notjustnerdytv.com
            </a>
          </p>
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <div className="bg-white">
          <Navigation onNavItemClick={() => setIsFormOpen(false)} />
          <div className="relative isolate px-6 pt-14 lg:px-8">
            {isFormOpen ? (
              <div className="p-4 mt-16 bg-white border-gray-200 border rounded-lg shadow-xl max-w-[1024px] mx-auto">
                <DeckRequestForm onCancel={() => setIsFormOpen(false)} />
              </div>
            ) : (
              <>
                <Hero onGetStartedClick={() => setIsFormOpen(true)} />
                {/* About Me */}
                <div className="mx-auto max-w-[1024px] py-14" id="about">
                  <MediaObject
                    title="About Me"
                    description="Howdy! I'ma Hispanic content creator originally from Colorado! Currently residing in New Mexico, I create Magic the Gathering, Dungeons and Dragons, Comic book, and other nerdy content! I never thought people paying me for “videos,” felt right so this is my attempt to raise money to make better content for y'all while still getting you something. Thanks for stopping by and all your consideration!"
                    imageSrc={AboutMeImage}
                    imageAlt="About Me"
                  />
                </div>
                <div className="mx-auto max-w-[1024px] py-14" id="myduties">
                  <MediaObject
                    title="What I do?"
                    description={
                      <>
                        <p>
                          I love helping others enhance their gameplay
                          experience by creating custom decks that suit their
                          unique playstyles. I specialize in creating
                          personalized Magic the Gathering decks tailored to
                          you.
                        </p>
                        <br />
                        <p>
                          Let me help you bring your vision to life with a
                          custom-built deck designed just for you. I offer a
                          range of services, including deck building, card
                          selection, and gameplay strategy. Whether you're a
                          casual player or a competitive gamer, I can help you
                          take your game to the next level.
                        </p>
                        <br />
                        <p>
                          I also create content for my social media platforms,
                          including YouTube, Instagram, and TikTok. I share tips
                          and tricks for deck building, gameplay strategy, and
                          more. My goal is to help you become a better player
                          and have more fun while playing Magic the Gathering.
                        </p>
                      </>
                    }
                    imageSrc={DecksImage}
                    imageAlt="What I do"
                  />
                </div>
              </>
            )}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
