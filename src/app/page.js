import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { LINKS } from '@/lib/constants'
import Link from 'next/link'

export default async function Home() {
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Omer Alpi" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" />
          <p>Hi 👋 I'm Omer, a front-end developer based in Izmir, Turkey.</p>
          <p>I develop things as a Front-end Developer at Izmir Teknoloji.</p>

          <div>
            <div className="mb-2">Visit my;</div>
            <ul className="list-inside list-disc">
              {LINKS.filter((x) => x.href !== '/').map((link) => (
                <li key={link.href}>
                  <Link className="font-medium underline" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
