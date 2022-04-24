import { useEffect } from 'react';
import styles from '../styles/Home.module.scss';
// import Wrapper from '../atoms/Wrapper';
// import Button from '../utils/Button';
import Wrapper from '../utils/Wrapper';
import Image from 'next/image'
import Process from '../utils/Process';
import Service from '../utils/Service';
import SEO from '../data/SEO';
import { gsapHomeAnimation } from '../utils/Animation';
import { gsap } from 'gsap/dist/gsap';
import Header from '../components/layout/Header';
// import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import TeamSection from 'src/organisms/TeamSection';

export default function About() {
  const handleScrollToMain = () => {
    gsap.to(window, { duration: 1.3, scrollTo: '#main', ease: 'expo.out' })
  }
  useEffect(() => {
    gsapHomeAnimation()
  }, [])

  return (
    <main className={styles.home}>
      <SEO
				title='Shopperbird | About'
				desc='Read the news from the editorial desk.'
			/>
      <Header />
      <section className={styles.hero}>
        <Wrapper>
          <section className={styles.container}>
            <section className={styles.heroInfo}>
              <h1 className={`${styles.heroTitle} hero-title`}>
								Welcome to Shopperbird
							</h1>
              {/* <section className='hero-title'>
                <Button label={`KNOW MORE`} icon={true} types='third' action={handleScrollToMain} />
              </section> */}
            </section>
            <Image
              src='/images/logoblck.svg'
              alt='Shopperbird Black Logo'
              width={823}
              height={574}
              layout='responsive'
              id='hero-image'
              className={`${styles.heroImage}`}
            />
          </section>
        </Wrapper>
      </section>

      {/* Who We Are */}
      <section className={styles.who_we_are} id='main'>
        <Wrapper>
          <section className={`${styles.container_who_we_are}`}>
            <h2 className={`${styles.title} section-1`}>
              <span className={`${styles.titleDecoration}`}>01</span>Who We Are
						</h2>
            <p className={`${styles.subtitle} section-1`}>
            Shopperbird comes with the necessity to take actions against fast fashion. 
            Many shoppers feel unrepresented from traditional fashion brands, 
            starting wondering if they are "different". 
            <br />
            We embrace the difference and we value shoppers who want to stand up against an unsustainable system. 
            Shopperbird gives back to shoppers the long lost freedom of expression
						</p>
          </section>
        </Wrapper>
      </section>


      {/* What we Make */}
      <section className={styles.what_we_make}>
        <Wrapper>
          <section className={styles.container_what_we_make}>
            <h2 className={`${styles.title} section-2`}>
              <span className={styles.titleDecoration}>02</span>What We Make
						</h2>
            {/* <p className={`${styles.subtitle} section-2`}>
              Ton of projects crafted by young and talented designers
						</p>
            <section className={`${styles.services}`}>
              <section className='section-2'>
                <Service
                  src='/images/03.jpg'
                  alt='Design'
                  width={518}
                  height={320}
                  title='Design'
                  desc='The right design will make you easier to achieve your goals in the future. By considering the ecosystem and climate change, you can create a website or applications that not only work but are also  comfortable and friendly for the users'
                />
              </section>
              <section className='section-2'>
                <Service
                  src='/images/05.jpg'
                  alt='Collect The Materials'
                  width={518}
                  height={320}
                  title='Collect The Materials'
                  desc={'The right design will make you easier to achieve your goals in the future. By considering the ecosystem and climate change, you can create a website or applications that not only work but are also  comfortable and friendly for the users'}
                />
              </section>
            </section> */}
          </section>
        </Wrapper>
      </section>


      {/* How we Work */}
      <section className={styles.how_we_work}>
        <Wrapper>
          <section className={styles.container_how_we_work}>
            <h2 className={`${styles.title} section-3`}>
              <span className={styles.titleDecoration}>03</span>How It Works
						</h2>
            <p className={`${styles.subtitle} section-3`}>
              The right solution come out from the right process
						</p>
            <section className={styles.process}>
              <section className='section-3'>
                <Process
                  src='/images/consulting.svg'
                  alt='Research Process by Riversun'
                  width={236}
                  height={181}
                  title='Research'
                  desc='To be able to solve design problems, we need to understand you and your customers, find out what holding you back, and do research to find the best solution for you.'
                />
              </section>
              <section className='section-3'>
                <Process
                  src='/images/designing.svg'
                  alt='Design Process by Riversun'
                  width={219}
                  height={181}
                  title='Design'
                  desc='To be able to solve design problems, we need to understand you and your customers, find out what holding you back, and do research to find the best solution for you.'
                  // desc='Our design has your users in mind, the humans behind the screen. We follow User-centered Design thinking to make sure every design provides the best User Experience possible.'
                />
              </section>
              <section className='section-3'>
                <Process
                  src='/images/tailoring.svg'
                  alt='Development Process by Riversun'
                  width={241}
                  height={181}
                  title='Tailoring'
                  desc='To be able to solve design problems, we need to understand you and your customers, find out what holding you back, and do research to find the best solution for you.'
                  // desc='We will bring life to the design we create together, with the latest web technology that not only fast and secure but also reliable. '
                />
              </section>
              <section className='section-3'>
                <Process
                  src='/images/package.svg'
                  alt='Testing Process by Riversun'
                  width={288}
                  height={181}
                  title='Deliver'
                  desc='To be able to solve design problems, we need to understand you and your customers, find out what holding you back, and do research to find the best solution for you.'
                  // desc='To make sure that we’ve hit all the checkmarks, we love to do user testing with some of your potential customers. This will help us determine what’s good and what’s can be improved.'
                />
              </section>
            </section>
          </section>
        </Wrapper>

        <TeamSection />
        
        <Footer />
      </section>
    </main>
  )
}