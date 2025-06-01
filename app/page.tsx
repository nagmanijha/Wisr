import React from 'react'
import {Button} from '@/components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/CTA'
import {getSubjectColor} from "@/lib/utils";
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
    <section className='home-section'>
      <CompanionCard 
      id="123"
      name="Neura the Brain Explorer"
      topic="neuroscience"
      subject="science"
      duration={45}
      color="#ff0000"
      bookmarked={false}
      />
       <CompanionCard 
      id="456"
      name="Neura the Brain Explorer"
      topic="neuroscience"
      subject="science"
      duration={45}
      color="#fff"
      bookmarked={false}  
      />
     <CompanionCard 
      id="789"
      name="Neura the Brain Explorer"
      topic="neuroscience"
      subject="science"
      duration={45}
      color="#11aaaa"
      bookmarked={false}
      />
    </section>

    <section className='home-section'>
      <CompanionList
        title="Recent Sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
      />
        <Cta/>
    </section>
    </main>
  )
}

export default Page