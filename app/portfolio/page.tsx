
import Container from "@/components/container";

export const revalidate = 86400; // 60*60*24

const works = [
    {
        imageUrl: '/works/felisnovel.png',
        url: 'https://felisnovel.com'
    },
    {
        imageUrl: '/works/paylith.png',
        url: ''
    },
    {
        imageUrl: '/works/dodomeki.png',
        url: ''
    },
    {
        imageUrl: '/works/coinyorum.png',
        url: ''
    }
]

export default async function PortfolioPage({}) {
  return (
    <>
      <Container size="large" >
        <div className={"max-w-screen-sm mx-auto"}>
            {works.map((work, index) => {
                const renderWork = () => (
                    <img src={work.imageUrl} className="w-100 rounded-lg" />
                )
                

                return (
                    <div key={index} className="py-4">
                        {work.url ? (
                            <a href={work.url} target="_blank" rel="noreferrer">
                                {renderWork()}
                            </a>
                        ): (
                            renderWork()
                        )}
                    </div>
                )
            })}
        </div>
      </Container>
    </>
  );
}
