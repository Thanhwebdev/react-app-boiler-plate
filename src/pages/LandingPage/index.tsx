import React, { useEffect, useState } from "react";
import "./styles.scss";
import { getIntro, getMockData } from '../../services/landingPage.service';

export default function LandingPage() {

  const [intro, setIntro] = useState<string>('');
  const [mockData, setMockData] = useState<any[]>([]);

  // fetch mock data from service
  const fetchMockData = async () => {
    const mockData =  await getMockData()
    setMockData(mockData)
  }

  useEffect(() => {
    // get and set intro
    const intro = getIntro()
    setIntro(intro)

    // get mock data
    fetchMockData()
  }, []);

  return <>
    <section className="center">
      <div className="banner">{intro}</div>  
    </section>
    <section>
      <ul>
        {
          mockData.map((e:any) => 
            <li key={e.id}>
              <p>{e.title}</p>
              <p>{e.body}</p>
            </li>
          )
        }
      </ul>
    </section>
  </>;
}
