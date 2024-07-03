import React from "react";
import Button from "./Button";
import Image from "next/image";
import HeroStyle from "./Hero.module.css";
function Hero() {
  return (
    <>
      <section className={HeroStyle.hero}>
        <div className={HeroStyle.heroTextContent}>
          <span>Recieve The BEST</span>
          <h1>The Most Relied Online Shopping site</h1>
          <p>
            Shop the latest fashion trends, accessories and more. We are the
            most reliable online shopping site in the world. We have the best
            products and services. We are the best in the world.
          </p>
          <div
            className={HeroStyle.heroActionButton}
            style={{ display: "flex", gap: "20px" }}
          >
            <Button text={"Sign Up"} theme="minimal" />
            <Button text={"Login"} theme="flare" />
          </div>
          <div>
            <span>Trusted By</span>
            <div className={HeroStyle.brandImgContainer}>
              <Image
                src="/amazon-pay.svg"
                alt="brand1"
                width={100}
                height={100}
                className={HeroStyle.brandImg}
              />
              <Image
                src="/facebook.svg"
                alt="brand1"
                width={100}
                className={HeroStyle.brandImg}
                height={100}
              />
              <Image
                src="/google.svg"
                className={HeroStyle.brandImg}
                alt="brand1"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className={HeroStyle.heroImgContainer}>
          <Image
            src="/hero.jpg"
            alt="hero"
            width={500}
            height={500}
            className={HeroStyle.heroImg}
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
