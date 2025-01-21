import Link from "next/link"
import { Button } from "@/components/ui/Button"
// import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <header className="py-6 px-4 md:px-6 flex items-center justify-between">
      <div className="text-2xl font-bold">HAZZEM</div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li><Link href="#projects">المشاريع</Link></li>
          <li><Link href="#skills">المهارات</Link></li>
          <li><Link href="#contact">اتصل بي</Link></li>
          <li><button >السيرة الذاتية</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header




// pnpm add @mui/icons-material @mui/material @emotion/styled @emotion/react