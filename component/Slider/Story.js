import styles from '../../styles/Slider.module.css'
import Image from 'next/image'

const Story = ({ name, image }) => {
  return (
    <section className={styles.Story_holder}>
      <div className={styles.image_story}>
        <Image src={image} width={86} alt="" height={86} />
      </div>
      <p>{name}</p>
    </section>
  )
}

export default Story
