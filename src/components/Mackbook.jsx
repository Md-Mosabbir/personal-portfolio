import { MacbookScroll } from './ui/macbook-scroll'
import { Link } from 'react-router-dom'
import code from '../assets/images/png/bgMac.png'

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-[#0B0B0F]  w-full px-2  ">
      <h3 className="font-poppins sm:text-5xl text-xl lg:text-7xl font-500   text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 mt-16">
        Checkout My Projects
      </h3>
      <MacbookScroll
        title={<span>I Hope You Will Like Them.</span>}
        badge={<Link href="https://peerlist.io/manuarora"></Link>}
        src={code}
        showGradient={false}
      />
    </div>
  )
}
