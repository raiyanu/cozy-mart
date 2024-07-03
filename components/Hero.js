"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import HeroStyle from "./Hero.module.css";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      <section className={HeroStyle.hero}>
        <motion.div
          initial={{ translateX: "-100px", opacity: 0 }}
          animate={{ translateX: "0px", opacity: 1 }}
        >
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
              style={{ display: "flex" }}
            >
              <Button text={"Sign Up"} theme="minimal" />
              <Button text={"Login"} theme="flare" />
            </div>
            <div className={HeroStyle.brandContainer}>
              <span>Trusted By</span>

              <div className={HeroStyle.brandImgContainer}>
                <motion.div>
                  <Image
                    src="/amazon-pay.svg"
                    alt="brand1"
                    width={100}
                    height={100}
                    className={HeroStyle.brandImg}
                  />
                </motion.div>
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
            <div>
              {/* to display number of brand colloboration , rating, business branches and billions of reevenue we make */}
              <div className={HeroStyle.brandInfo}>
                <div>
                  <span>100+</span>
                  <p>
                    Brand <br />
                    Colloboration
                  </p>
                </div>
                <div>
                  <span>4.5</span>
                  <p>Rating</p>
                </div>
                <div>
                  <span>100+</span>
                  <p>
                    Business <br />
                    Branches
                  </p>
                </div>
                <div>
                  <span> 11 </span>
                  <p>
                    Millions <br />
                    orders{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
              transition: {
                delay: 0.5,
                when: "afterChildren",
              },
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.5,
                when: "beforeChildren",
              },
            },
          }}
        >
          <div className={HeroStyle.heroImgContainer}>
            <Image
              src="/hero.png"
              alt="hero"
              width={500}
              height={500}
              className={HeroStyle.heroImg}
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
