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
// import TeamSection from 'src/organisms/TeamSection';

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
				title='Joy Agustian | About'
				desc='Read the news from the editorial desk.'
			/>
      <Header />
      <section className={styles.hero}>
        <Wrapper>
          <section className={styles.container}>
            <section className={styles.heroInfo}>
              <h1 className={`${styles.heroTitle} hero-title`}>
								Hello, Everyone!
							</h1>
              {/* <section className='hero-title'>
                <Button label={`KNOW MORE`} icon={true} types='third' action={handleScrollToMain} />
              </section> */}
            </section>
            <Image
              src='/images/27-raw-logo.svg'
              alt='Joy Agustian Logo'
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
                  />
              </section>
            </section>
          </section>
        </Wrapper>
        {/* <TeamSection /> */}
        <Footer />
      </section>
    </main>
  )
}