import styles from "./About.module.css";
import Animator from "../components/Animator";
export default function About() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>About Us</h1>

        <section className={styles.section}>
        <Animator once={true}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.paragraph}>
            Welcome to Cozy Mart! We are a family-owned business that started in
            2005 with a small shop in a cozy neighborhood. Over the years, we
            have grown into a leading retailer, providing high-quality products
            and exceptional customer service.
          </p>
          <p className={styles.paragraph}>
            Our journey began when the Thompson family decided to turn their
            passion for home goods into a business. What started as a small
            corner store has now blossomed into a chain of stores across the
            country, each maintaining the warm, welcoming atmosphere that has
            become our signature.
          </p>
          </Animator>

        <Animator once={true}>

          <h3 className={styles.subsectionTitle}>Key Milestones</h3>
          <ul className={styles.list}>
            <li>2005: Opened our first store in Downtown Cozyton</li>
            <li>2010: Launched our online store</li>
            <li>2015: Expanded to 10 physical locations</li>
            <li>2020: Introduced our eco-friendly product line</li>
            <li>2023: Celebrated serving over 1 million happy customers</li>
          </ul>
          </Animator>

        </section>
      <Animator once={true}>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.paragraph}>
            At Cozy Mart, our mission is to make your shopping experience
            enjoyable and convenient. We strive to offer a wide range of
            products that meet your needs, from everyday essentials to unique
            and innovative items.
          </p>

          <h3 className={styles.subsectionTitle}>What Sets Us Apart</h3>
          <ol className={styles.orderedList}>
            <li>Curated Selection: We handpick every item in our inventory</li>
            <li>
              Exceptional Service: Our staff is trained to provide personalized
              assistance
            </li>
            <li>
              Sustainability Focus: We prioritize eco-friendly and ethically
              sourced products
            </li>
            <li>
              Community Involvement: We actively participate in local events and
              initiatives
            </li>
          </ol>
        </section>
        </Animator>

        {/* ... (rest of the sections) ... */}
      <Animator once={true}>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions or feedback, we would love to hear from
            you. You can reach us through our contact form or visit one of our
            store locations.
          </p>

          <h3 className={styles.subsectionTitle}>Get in Touch</h3>
          <ul className={styles.contactList}>
            <li>
              <strong>Customer Service:</strong>{" "}
              <a href="mailto:ray@cozymart.com" className={styles.link}>
              ray@cozymart.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> (+91) 9876 54 321
            </li>
            <li>
              <strong>Headquarters:</strong> 123 E-commerce St, Web City, Web Browser dist, 12345
            </li>
          </ul>
          <p className={styles.paragraph}>
            Find a{" "}
            <a href="/stores" className={styles.link}>
              Cozy Mart store near you
            </a>
            .
          </p>
        </section>
        </Animator>

      </div>
    </>
  );
}
