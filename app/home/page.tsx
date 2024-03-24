import Head from "next/head";
import Image from "next/image";
import styles from "../../sass/Home.module.scss";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>FitFocus</title>
        <meta
          name="description"
          content="Created for Fueler Proof of Work Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        {/* Left */}
        <div className={styles.left}>
          {/* Logo */}
          <Link href="/home">
            <div  className={styles.logo}>FitFocus</div>
          </Link>
        </div>

        {/* Middle */}
        <nav className={styles.middle}>
          <HeaderLink href="/features">Features</HeaderLink>
          <HeaderLink href="#">Pricing</HeaderLink>
          <HeaderLink href="#">Community</HeaderLink>
          <HeaderLink href="#">Lifestyle</HeaderLink>
        </nav>

        {/* Right */}
        <div className={styles.right}>
          {/* App Icons */}
          

          {/* Header CTA */}
          <Link href="/profile" passHref>
            <div className={styles.cta}>Get Started</div>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Left - Content */}
          <article className={styles.left}>
            {/* Heading */}
            <h1 className={styles.heading}>
              One step towards a healthy lifestyle
            </h1>

            {/* Subheading */}
            <p className={styles.subheading}>
              Healthy body is the secret of healthy lifestyle. Start your day
              with BitClass. Get Started.
            </p>

            {/* CTAs */}
            <div className={styles.CTAs}>
              <button className={[styles.CTA, styles.fill].join(" ")}>
                Get Started
              </button>
              <button className={[styles.CTA, styles.outline].join(" ")}>
                Invite Friends
              </button>
            </div>

            {/* Rating */}
            
          </article>

          <article className={styles.right}>
            {/* Hero Image */}
            <div className={styles.image}>
              <div className="ml-96">
                <div className="ml-64">

              <Image 
                height={800}
                width={800}
                alt="Lady in stretching pose"
                src="/images/hero-lady.png"
              />
                </div>

              </div>
            </div>

           
          </article>
        </section>

        {/* Top Workout Section */}
        <section className={styles.topWorkout}>
          {/* Heading */}
          <h2 className={styles.heading}>Top Workouts</h2>

          {/* List */}
          <WorkoutList
            items={[
              {
                title: "Yoga Training",
                subheading: "For Beginners",
                stats: ["🧘‍♀️ 15 Min", "🔥 200 Cal"],
                image: {
                  width: 203,
                  height: 243,
                },
              },
              {
                title: "Cardio Training",
                subheading: "For Intermediates",
                stats: ["🏃‍♀️ 28 Min", "🔥 260 Cal"],
                image: {
                  width: 203,
                  height: 243,
                },
              },
              {
                title: "CrossFit Training",
                subheading: "For Experts",
                stats: ["🏋️‍♀️ 14 Min", "🔥 350 Cal"],
                image: {
                  width: 203,
                  height: 243,
                },
              },
            ]}
          />
        </section>
      </main>
     
    </div>
  );
}

const HeaderLink = ({ href, children } : {href:any , children:any}) => (
  <Link href={href} passHref>
    <div className={styles.headerLink}>{children}</div>
  </Link>
);

const WorkoutList = ({ items }: { items: any }) => (
  <ul className={styles.workoutList}>
    {items.map(
      (
        { title, subheading, stats, image: { height, width } }: { title: any; subheading: any; stats: any; image: any },
        idx: number // Assuming idx is of type number
      ) => (
        <li className={styles.item} key={idx}>
          {/* Title */}
          <h3 className={styles.title}>{title}</h3>
          {/* Subheading */}
          <p className={styles.subheading}>{subheading}</p>
          {/* Stats list */}
          <ul className={styles.stats}>
            {stats.map(({ value }: { value: any }, i: number) => (
              <li className={styles.stat} key={i}>
                {value}
              </li>
            ))}
          </ul>

          {/* Image - Absolute */}
          <div className={styles.image}>
            <Image
              height={height}
              width={width}
              alt={`${title} Demo Image`}
              src={`/images/workout-items/${
                { 1: "first", 2: "second", 3: "third" }[idx + 1 as 1 | 2 | 3] // Explicitly define the type here
              }.png`}
            />
          </div>
        </li>
      )
    )}
  </ul>
);

