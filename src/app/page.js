import { FloatingHeader } from '@/components/floating-header'
import { NavigationLink } from '@/components/navigation-link'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { LINKS, PROFILES } from '@/lib/constants'

export default async function Home() {
  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Omer Alpi" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" />
          <p>Product hacker at work</p>
          <div className="lg:hidden">
            <div className="flex flex-col gap-1">
              {LINKS.filter((x) => x.href !== '/').map((link) => (
                <NavigationLink key={link.href} href={link.href} label={link.label} icon={link.icon} />
              ))}
            </div>
            <hr />
            <div className="flex flex-col gap-1">
              {Object.values(PROFILES).map((profile) => (
                <NavigationLink key={profile.url} href={profile.url} label={profile.title} icon={profile.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
