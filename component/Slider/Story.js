import styles from '../../styles/Slider.module.css'
import Image from 'next/image'

const Story = () => {
  return (
    <section className={styles.Story_holder}>
      <div className={styles.story_text}>
        <Image src="/Story.svg" width={86} alt="" height={86} />
      </div>
      <div className={styles.story_text}>Some text</div>
    </section>
  )
}

export default Story
