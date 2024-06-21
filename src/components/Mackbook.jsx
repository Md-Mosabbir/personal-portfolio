import { MacbookScroll } from './ui/macbook-scroll'
import { Link } from 'react-router-dom'
import code from '../assets/images/png/bgMac.png'

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-[#0B0B0F]  w-full">
      <MacbookScroll
        title={
          <span>
            Checkout the projects I made. <br /> I hope you will like it.
          </span>
        }
        badge={<Link href="https://peerlist.io/manuarora"></Link>}
        src={code}
        showGradient={false}
      />
    </div>
  )
}
