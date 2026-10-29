import { profile } from '@/data/profile'
import { socialLinks, emailContact } from '@/data/social'
import Avatar from '@/components/common/Avatar'
import SocialLinks from '@/components/common/SocialLinks'
import Container from '@/components/layout/Container'

export default function Hero() {
  return (
    <header className="pt-10 sm:pt-16">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="sm:flex sm:w-1/2 sm:justify-end">
            <Avatar name={profile.name} photoUrl={profile.photoUrl} size={176} />
          </div>
          <div className="sm:w-1/2 sm:pl-6 sm:pt-6">
            <h1 className="text-3xl font-semibold text-heading sm:text-4xl">{profile.name}</h1>
            <p className="mt-2 text-base italic text-text sm:text-lg">{profile.tagline}</p>
            <div className="mt-4 flex justify-center sm:justify-start">
              <SocialLinks links={socialLinks} email={emailContact} />
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </header>
  )
}
