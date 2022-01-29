import React, { useState, useEffect } from 'react';
import {projectData} from './api/projectsData'
import Image from "next/image";
import { Button, ButtonGroup } from '@chakra-ui/react'
import ProjectModal from '../components/ProjectModal';

const Project = () => {
  const [data, setData] = useState(projectData);
  return (
    <>
    <section >
    <div className="flex items-center justify-center">
        <p className="font-serif text-center text-2xl font-extrabold text-black-100">
          <p className="text-primary_orange-0 text-5xl text center font-extrabold mb-10">
            Projects - GSSOC&apos;21
          </p>
          unfinished projects are the symbol of progress,
          <br /> not of imperfection
        </p>
      </div>
      <br />
      <div className="flex flex-wrap w-100 justify-around gap-5">
      {
       data.map((curElem, i) => {
          return (
          <div className="flex items-center justify-between w-80" key={i}>
            <div className="p-4 shadow">
              <div className="mb-2 overflow-hidden rounded-lg shadow-lg md:h-80 w-80 p-5 flex flex-col justify-between">
                <>
                  {/* <Button onClick={onOpen}>Open Modal</Button> */}
                  <div className="font-bold text-indigo-500 md:text-lg">{i+1}. { curElem.project_name }</div>
                  <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
                  { curElem.owner_name }
                  </p>
                  <br/>
                  {
                    curElem.mentors_id.map((mentor, j) => {
                    return(
                      <h6 className="mb-3 text-sm text-gray-400" key={j}>
                      {j+1}. { mentor.name }
                      </h6>
                    )
                    })
                  }
                  <br />
                  <ButtonGroup className="flex flex-wrap gap-1" variant='outline' spacing='1'>
                  {
                    curElem.technology_used.split(",").map((techStk, k) => {
                      return(
                        <Button size='sm' colorScheme='orange' key={k}>{techStk}</Button>
                      )
                    })
                  }
                  </ButtonGroup>
                </>
              </div>
            </div>
          </div>
          )
       })
     }
     </div>
     </section>
    </>
  );
}

export default Project;