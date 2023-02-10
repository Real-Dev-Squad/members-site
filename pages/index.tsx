import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from './components/Navbar/Navbar'
import HOCNavbar from './components/Navbar/HOCNavbar'
const Navbar1=HOCNavbar(Navbar);
export default function index() {
  return (
    <>
    <Navbar1/>
    </>
  )
}
