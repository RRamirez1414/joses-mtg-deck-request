import { useGetScryfallCardQuery, useScryfallAutocompleteQuery } from '../hooks'
import { useMemo, useState } from 'react'
import { useDebounce } from 'react-use'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

type AutoCompleteOption = {
  label: string
  value: string
}

type DeckRequestFormInput = {
  firstName: string
  lastName: string
  email: string
  description: string | null
  cardName: AutoCompleteOption | null
}

const DeckRequestForm = ({ onCancel }: { onCancel: () => void }) => {
  // states
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm)
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<DeckRequestFormInput>()

  // queries
  const scryfallAutocompleteQuery = useScryfallAutocompleteQuery(debouncedTerm)
  const scryfallCardQuery = useGetScryfallCardQuery(watch('cardName')?.value)

  // variables/functions
  const autoCompleteOptions = useMemo<Array<AutoCompleteOption>>(() => {
    if (scryfallAutocompleteQuery.data) {
      return scryfallAutocompleteQuery.data.data.map((option) => ({
        label: option,
        value: option,
      }))
    }
    return []
  }, [scryfallAutocompleteQuery.data])

  const onSubmit: SubmitHandler<DeckRequestFormInput> = (data) =>
    console.log({ data })

  // effects
  useDebounce(
    () => {
      setDebouncedTerm(searchTerm)
    },
    500,
    [searchTerm],
  )
  //   console.log({
  //     selectedCard,
  //     scryfallCardQuery: scryfallCardQuery.data,
  //     selectedCardImage: scryfallCardQuery.data?.image_uris,
  //   })
  //   console.log({
  //     data: scryfallAutocompleteQuery.data,
  //     autoCompleteOptions,
  //     debouncedTerm,
  //   })
  console.log({
    errors,
    formState: watch(),
  })

  return (
    <form>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          {/* Image container */}
          <div className="col-span-1 h-full w-full">
            {watch('cardName') ? (
              // show initial image
              scryfallCardQuery.data?.image_uris ? (
                <>
                  <div className="flex items-center justify-center">
                    <img
                      src={scryfallCardQuery.data.image_uris.large}
                      alt={scryfallCardQuery.data.name}
                      className="h-full w-72 rounded-lg object-cover shadow-lg"
                    />
                  </div>
                  <div className="mt-2 flex items-center justify-center">
                    <p className="text-sm/6 text-gray-500">
                      {scryfallCardQuery.data.name}
                    </p>
                  </div>
                </>
              ) : // check if card has multiple faces
              scryfallCardQuery.data?.card_faces?.length ? (
                <div className="flex items-center justify-center relative">
                  <button
                    type="button"
                    onClick={() => setIsCardFlipped(!isCardFlipped)}
                    className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 top-0 left-0 z-10 absolute"
                  >
                    Flip
                  </button>
                  {isCardFlipped ? (
                    <img
                      src={
                        scryfallCardQuery.data.card_faces[0].image_uris.large
                      }
                      alt={scryfallCardQuery.data.name}
                      className="h-full w-72 rounded-lg object-cover shadow-lg"
                    />
                  ) : (
                    <img
                      src={
                        scryfallCardQuery.data.card_faces[1].image_uris.large
                      }
                      alt={scryfallCardQuery.data.name}
                      className="h-full w-72 rounded-lg object-cover shadow-lg"
                    />
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <p className="text-sm/6 text-gray-500">No image available</p>
                </div>
              )
            ) : (
              <div className="flex items-center justify-center">
                <p className="text-sm/6 text-gray-500">No card selected</p>
              </div>
            )}
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Select a card{' '}
                <span className="text-xs text-gray-500">
                  (powered by{' '}
                  <a className="text-blue-400" href="https://scryfall.com">
                    Scryfall
                  </a>
                  )
                </span>
              </label>
              <div className="mt-2">
                <Controller
                  name="cardName"
                  control={control}
                  defaultValue={null}
                  rules={{
                    required: 'Card is required',
                  }}
                  render={({ field }) => (
                    <>
                      <Combobox {...field} onClose={() => setSearchTerm('')}>
                        <div className="relative mt-2">
                          <ComboboxInput
                            className={clsx(
                              'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6',
                              errors.cardName
                                ? 'outline-red-500 focus:outline-red-500'
                                : 'focus:outline-purple-600',
                            )}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            displayValue={(card: AutoCompleteOption) =>
                              card?.label
                            }
                            placeholder="Search for a card..."
                          />
                          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDownIcon
                              className="h-5 w-5 text-gray-400 hover:text-gray-500 hover:cursor-pointer"
                              aria-hidden="true"
                            />
                          </ComboboxButton>
                          <ComboboxOptions className="absolute z-[1] mt-1 max-h-[200px] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm/6">
                            {autoCompleteOptions.map((option) => (
                              <ComboboxOption
                                key={option.value}
                                value={option}
                                className={clsx(
                                  'relative cursor-default select-none py-2 pl-10 pr-4',
                                  'text-gray-900',
                                  'hover:bg-purple-600 hover:text-white hover:cursor-pointer',
                                  'focus:outline-none focus:ring-2 focus:ring-purple-600',
                                  option.value === watch('cardName')?.value
                                    ? 'bg-purple-600 text-white'
                                    : '',
                                  '',
                                )}
                              >
                                <span
                                  className={clsx(
                                    'block truncate',
                                    'font-normal',
                                    'data-[active=true]:font-semibold data-[selected=true]:font-semibold',
                                  )}
                                >
                                  {option.label}
                                </span>
                              </ComboboxOption>
                            ))}
                            {autoCompleteOptions.length === 0 && (
                              <div className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900">
                                <span className="block truncate font-normal">
                                  No results found
                                </span>
                              </div>
                            )}
                          </ComboboxOptions>
                        </div>
                      </Combobox>
                      {errors.cardName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.cardName.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First name*
              </label>
              <div className="mt-2">
                <input
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                  maxLength={30}
                  type="text"
                  autoComplete="given-name"
                  className={clsx(
                    'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6',
                    errors.firstName
                      ? 'outline-red-500 focus:outline-red-500'
                      : 'focus:outline-purple-600',
                  )}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last name*
              </label>
              <div className="mt-2">
                <input
                  {...register('lastName', {
                    required: 'Last name is required',
                  })}
                  maxLength={30}
                  type="text"
                  autoComplete="family-name"
                  className={clsx(
                    'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6',
                    errors.lastName
                      ? 'outline-red-500 focus:outline-red-500'
                      : 'focus:outline-purple-600',
                  )}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address*
              </label>
              <div className="mt-2">
                <input
                  {...register('email', { required: 'Email is required' })}
                  maxLength={50}
                  type="email"
                  autoComplete="email"
                  className={clsx(
                    'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6',
                    errors.email
                      ? 'outline-red-500 focus:outline-red-500'
                      : 'focus:outline-purple-600',
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Description{' '}
                <span className="text-xs text-gray-500">(optional)</span>
              </label>
              <div className="mt-2">
                <textarea
                  {...register('description')}
                  maxLength={1000}
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">
                Brief description of your deck request. You can include your
                playstyle, favorite colors, and any specific cards you want to
                include.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm/6 font-semibold text-gray-900"
          onClick={() => {
            // reset form
            setSearchTerm('')
            setDebouncedTerm('')
            setIsCardFlipped(false)
            reset({
              firstName: '',
              lastName: '',
              email: '',
              description: null,
              cardName: null,
            })
            onCancel()
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default DeckRequestForm
