"use client";
import styles from "./page.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { color } from "framer-motion";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card
        custom={{
          row: 2,
          column: 2,
          style: {
            backgroundColor: "red",
            color: "white",
          },
          tag: "Latest Collection",
          heading: "Nike Crimson Shoes",
          list: [
            "Quality product",
            "Material Design",
            "Comfortable",
            "Durable",
          ],
          forwardLink: {
            href: "/chairs",
            label: "View all chairs",
          },
          image: {
            imgSrc: "shoe.jpg",
            alt: "shoe",
          },
        }}
      />
      <Card
        custom={{
          row: 1,
          column: 1,
          style: {
            backgroundColor: "blue",
            color: "white",
          },
          tag: "Top Choice",
          heading: "Nike Crimson Shoes",
          list: [
            "Quality product",
            "Material Design",
            "Comfortable",
            "Durable",
          ],
          forwardLink: {
            href: "/chairs",
            label: "View all chairs",
          },
          image: {
            imgSrc: "shoe.jpg",
            alt: "shoe",
          },
        }}
      />
    </>
  );
}
