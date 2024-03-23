"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "../../sass/Home.module.scss";
import Link from "next/link";

export default function Pricing() {
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
          <HeaderLink href="#">Pricing</HeaderLink>
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
            Pricing
            </h2>
            <div className="container">
        <div className="header">
            <p className="fs-1 text-center">Pricing</p>
            <p className="fs-4">Quickly build an effective pricing table for your potential customers with this
                Bootstrap example. It's built with default Bootstrap components and utilities with little
                Customization</p>
        </div>
        <div className="sub-header d-flex flex-column justify-content-center">
            <label className="form-label text-center ">Number of users:</label>
            <input type="range" className="form-range" min="0" max="10"/>
            <span className="text-center">(0-10)</span>
        </div>
        <div className="content row">
            <div className="col-md-3 col-sm-6">
                <div className="pricingTable">
                    <div className="pricingTable-header">
                        <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                        <h3 className="price-value">Free</h3>
                    </div>
                    <div className="heading "> $0.00 <span className="month">per month</span> </div>
                    <div className="pricing-content">
                        <ul className="sub-menu-list">
                            <li className="sub-menu-items" ><b>10</b> users included</li>
                            <li className="sub-menu-items" ><b>2 GB</b> of storage</li>
                            <li className="sub-menu-items" ><b>Email </b> Support</li>
                            <li className="sub-menu-items" ><b>Help Center</b> access</li>
                            <li className="sub-menu-items" ><b>15</b> Domains</li>
                        </ul>
                    </div>
                    <div className="pricingTable-signup">
                        <a className="link" href="#">sign up for free</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3 col-sm-6">
                <div className="pricingTable green">
                    <div className="pricingTable-header">
                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                        <div className="price-value"> $20.00 <span className="month">per month</span> </div>
                    </div>
                    <h3 className="heading">Pro</h3>
                    <div className="pricing-content">
                        <ul className="sub-menu-list">
                            <li className="sub-menu-items" ><b>60GB</b> Disk Space</li>
                            <li className="sub-menu-items" ><b>60</b> Email Accounts</li>
                            <li className="sub-menu-items" ><b>60GB</b> Monthly Bandwidth</li>
                            <li className="sub-menu-items" ><b>15</b> subdomains</li>
                            <li className="sub-menu-items" ><b>20</b> Domains</li>
                        </ul>
                    </div>
                    <div className="pricingTable-signup">
                        <a className="link" href="#">Get Started</a>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="pricingTable blue">
                    <div className="pricingTable-header">
                        <i className="fa-solid fa-cog fa-spin"></i>
                        <div className="price-value"> $30.00 <span className="month">per month</span> </div>
                    </div>
                    <h3 className="heading">Enterprice</h3>
                    <div className="pricing-content">
                        <ul className="sub-menu-list">
                            <li  className="sub-menu-items" ><b>70GB</b> Disk Space</li>
                            <li  className="sub-menu-items" ><b>70</b> Email Accounts</li>
                            <li  className="sub-menu-items" ><b>70GB</b> Monthly Bandwidth</li>
                            <li  className="sub-menu-items" ><b>20</b> subdomains</li>
                            <li  className="sub-menu-items" ><b>25</b> Domains</li>
                        </ul>
                    </div>
                    <div className="pricingTable-signup">
                        <a className="link" href="#">Contact us</a>
                    </div>
                </div>
            </div>

        </div>
       </div> 
    <div className="footer fixed-bottom bottom-0 ">
        <div className="sub-menus d-flex justify-content-center">
            <ul>
                <p>©2023-2024</p>
            </ul>
            <ul>
                <label className="fs-4" >Features</label>
                <li>cool stuff</li>
                <li>random feature</li>
                <li>Team feature</li>
                <li>Another one</li>
                <li>Last time</li>
            </ul>
            <ul>
                <label className="fs-4" >Resources</label>
                <li>Resource</li>
                <li>Resource name</li>
                <li>Another Resource</li>
                <li>Final Resource</li>
            </ul>
            <ul>
                <label className="fs-4" >About</label>
                <li>Teams</li>
                <li>Locations</li>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className="fotter-sub-heading">
            <p className="text-center">©2023-2024 your company</p>
        </div>
    </div>
    <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'></script>
    <script type='text/javascript'
        src='https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js'></script>
    <script type='text/javascript'></script>
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

