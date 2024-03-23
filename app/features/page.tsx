import Head from "next/head";
import Image from "next/image";
import styles from "../../sass/Home.module.scss";
import Link from "next/link";

export default function Features() {
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
          <HeaderLink href="#">Features</HeaderLink>
          <HeaderLink href="/pricing">Pricing</HeaderLink>
          <HeaderLink href="#">Community</HeaderLink>
          <HeaderLink href="#">Lifestyle</HeaderLink>
        </nav>

        {/* Right */}
        <div className={styles.right}>
          {/* App Icons */}
          

          {/* Header CTA */}
          <Link href="/profile" passHref>
            <div className={styles.cta}>Features</div>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className={styles.main}>
        {/* Hero Section */}
       <div className="mt-48">
            <p>
                
            </p>
       </div>

        {/* Top Workout Section */}
        <section className={styles.topWorkout}>
          {/* Heading */}
          <h2 className={styles.heading}>
            FitFocus Website helps users to meet their desired fitness levels <br></br> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;by focusing on their diet calories monitoring <br></br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;as well as their daily workouts</h2>

            <div className="mt-64">

            </div>
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

