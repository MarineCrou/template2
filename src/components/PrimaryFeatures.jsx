'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

const features = [
  {
    title: 'EMDR',
    description:
      'Ut ornare lectus sit amet est. Ligula ullamcorper malesuada proin libero nunc. Sed cras ornare arcu dui. Fames ac turpis egestas maecenas.',
    image:
      'https://sf2.psychologies.com/wp-content/uploads/psycho/2009/02/emdr-tout-savoir.jpg',
  },
  {
    title: 'Thérapies Cognitivo-Comportementales (TCC)',
    description:
      'Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Urna duis convallis convallis tellus id interdum velit',
    image:
      'https://www.psychologue-06-abdelmoula.com/wp-content/uploads/2023/09/Therapies-comportementales-cognitives-TCC-1210x617.jpg',
  },
  {
    title: 'Thérapie à Médiation Animale',
    description:
      'Quis viverra nibh cras pulvinar mattis nunc. Scelerisque eleifend donec pretium vulputate sapien nec.',
    image:
      'https://i0.wp.com/ma-mediation-animale.com/wp-content/uploads/2021/05/cropped-cbikeuuraq8-1.jpg?fit=1920%2C1188&ssl=1',
  },
  {
    title: 'Hypnose',
    description:
      'A lacus vestibulum sed arcu non odio euismod lacinia. Curabitur gravida arcu ac tortor dignissim convallis.',
    image:
      'https://www.francebleu.fr/s3/cruiser-production/2021/06/47bae4c8-d29f-41b6-a057-03185b302776/1200x680_gettyimages-1213531990.jpg',
  },
  {
    title: 'Thérapie de Groupe',
    description:
      'Felis eget velit aliquet sagittis id. Aliquam ultrices sagittis orci a. Sit amet consectetur adipiscing elit duis tristique sollicitudin.',
    image:
      'https://www.psychologue-kieffer.lu/wp-content/uploads/2023/08/Images-Blog-7.png',
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Les Soins
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Purus sit amet volutpat consequat mauris nunc congue nisi.
            Ullamcorper sit amet risus nullam eget felis eget nunc. Consectetur
            adipiscing elit ut aliquam purus.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display data-selected:not-data-focus:outline-hidden text-lg',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <img
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
