import React from 'react';

import { SectionGroup } from '../components/section/SectionGroup'
import { SectionPanel } from '../components/section/SectionPanel'

import 'styles/question-three/components/index.css'

export const QuestionThree = (props) => {
  return (
    <SectionGroup>
      <SectionPanel>
        <div className="w-full mx-auto">
          <div className="grid grid-cols-3 relative">
            {/* Sidebar component */}
            <sidebar className="ske-sidebar w-12 absolute bg-skeColors-darkBlue z-10 transition-all">
              <ul className="list-none m-0 p-2 flex flex-col h-full">
                <li className="w-8 h-8 rounded-full bg-skeColors-lightGrey mb-2"></li>
                <li className="w-8 h-8 rounded-full bg-skeColors-lightGrey mb-2"></li>
                <li className="w-8 h-8 rounded-full bg-skeColors-lightGrey mb-2"></li>
                <li className="w-8 h-8 rounded-full bg-skeColors-lightGrey mt-auto"></li>
              </ul>
            </sidebar>{/* END OF: Sidebar component */}
            
            {/* Header Component */}
            <header className="ske-header col-span-3">
              <section className="ske-header-container flex items-stretch">
                {/* First module in Header */}
                <div className="flex-initial m-2 self-center text-white text-xl">
                  Header
                </div>{/* END OF: First module in Header */}
                {/* Second module in Header */}
                <div className="flex-initial m-2 self-center">another module</div>{/* Second module in Header */}
              </section>
            </header>
            {/* Left Column */}
            <section className="ske-left-column col-span-3 md:col-span-1 p-5 space-y-4 overflow-y-auto">
              <div className="ske-card p-5 relative ml-12">
                <h3 className="ske-card__title font-bold inline">Build a fence</h3>&nbsp;<span className="text-xs ske-txt-c-lg">Job #0</span>
                <h4 className="ske-txt-c-lg text-xs pb-2">Brisbane</h4>

                <p className="text-xs ske-txt-c-lg ">Sat Sep 01 2018</p>
                <p className="font-bold text-xs ske-txt-c-lg ">10:00 - 11:00</p>
                <span className="ske-card__allocated absolute rounded-full h-8 w-8 flex items-center justify-center border ske-border-blue ske-txt-c-blue">1</span>
              </div>
              <div className="ske-card p-5 relative ml-12">
                <h3 className="ske-card__title font-bold inline">Build a fence</h3>&nbsp;<span className="text-xs ske-txt-c-lg">Job #0</span>
                <h4 className="ske-txt-c-lg text-xs pb-2">Brisbane</h4>

                <p className="text-xs ske-txt-c-lg">Sat Sep 01 2018</p>
                <p className="font-bold text-xs ske-txt-c-lg ">10:00 - 11:00</p>
                <span className="ske-card__allocated absolute rounded-full h-8 w-8 flex items-center justify-center border ske-border-blue ske-txt-c-blue">1</span>
              </div>
              <div className="ske-card p-5 relative ml-12">
                <h3 className="ske-card__title font-bold inline">Build a fence</h3>&nbsp;<span className="text-xs ske-txt-c-lg">Job #0</span>
                <h4 className="ske-txt-c-lg text-xs pb-2">Brisbane</h4>

                <p className="text-xs ske-txt-c-lg">Sat Sep 01 2018</p>
                <p className="font-bold text-xs ske-txt-c-lg ">10:00 - 11:00</p>
                <span className="ske-card__allocated absolute rounded-full h-8 w-8 flex items-center justify-center border ske-border-blue ske-txt-c-blue">1</span>
              </div>
              <div className="ske-card p-5 relative ml-12">
                <h3 className="ske-card__title font-bold inline">Build a fence</h3>&nbsp;<span className="text-xs ske-txt-c-lg">Job #0</span>
                <h4 className="ske-txt-c-lg text-xs pb-2">Brisbane</h4>

                <p className="text-xs ske-txt-c-lg ">Sat Sep 01 2018</p>
                <p className="font-bold text-xs ske-txt-c-lg ">10:00 - 11:00</p>
                <span className="ske-card__allocated absolute rounded-full h-8 w-8 flex items-center justify-center border ske-border-blue ske-txt-c-blue">1</span>
              </div>
              <div className="ske-card p-5 relative ml-12">
                <h3 className="ske-card__title font-bold inline">Build a fence</h3>&nbsp;<span className="text-xs ske-txt-c-lg">Job #0</span>
                <h4 className="ske-txt-c-lg text-xs pb-2">Brisbane</h4>

                <p className="text-xs ske-txt-c-lg ">Sat Sep 01 2018</p>
                <p className="font-bold text-xs ske-txt-c-lg ">10:00 - 11:00</p>
                <span className="ske-card__allocated absolute rounded-full h-8 w-8 flex items-center justify-center border ske-border-blue ske-txt-c-blue">1</span>
              </div>
              <div className="ske-card p-5 relative ml-12">
                <h3 className="ske-card__title font-bold inline">Build a fence</h3>&nbsp;<span className="text-xs ske-txt-c-lg">Job #0</span>
                <h4 className="ske-txt-c-lg text-xs pb-2">Brisbane</h4>

                <p className="text-xs ske-txt-c-lg ">Sat Sep 01 2018</p>
                <p className="font-bold text-xs ske-txt-c-lg ">10:00 - 11:00</p>
                <span className="ske-card__allocated absolute rounded-full h-8 w-8 flex items-center justify-center border ske-border-blue ske-txt-c-blue">1</span>
              </div>
              <div className="ske-card p-5 relative ml-12">
                <h3 className="ske-card__title font-bold inline">Build a fence</h3>&nbsp;<span className="text-xs ske-txt-c-lg">Job #0</span>
                <h4 className="ske-txt-c-lg text-xs pb-2">Brisbane</h4>

                <p className="text-xs ske-txt-c-lg ">Sat Sep 01 2018</p>
                <p className="font-bold text-xs ske-txt-c-lg ">10:00 - 11:00</p>
                <span className="ske-card__allocated absolute rounded-full h-8 w-8 flex items-center justify-center border ske-border-blue ske-txt-c-blue">1</span>
              </div>
            </section>{/* END OF: Left Column */}
            
            {/* Right Column */}
            <section className="ske-right-column col-span-3 md:col-span-2 p-5 overflow-y-auto p-5 space-y-4">
              <section className="w-full h-40 bg-skeColors-lightBlue"></section>
              <section className="w-full h-40 bg-skeColors-lightBlue"></section>
              <section className="w-full h-40 bg-skeColors-lightBlue"></section>
              <section className="w-full h-40 bg-skeColors-lightBlue"></section>
              <section className="w-full h-40 bg-skeColors-lightBlue"></section>
              <section className="w-full h-40 bg-skeColors-lightBlue"></section>
              <section className="w-full h-40 bg-skeColors-lightBlue"></section>
            </section>{/* END OF: Right Column */}
          </div>

        </div>
      </SectionPanel>
    </SectionGroup>
  )
}