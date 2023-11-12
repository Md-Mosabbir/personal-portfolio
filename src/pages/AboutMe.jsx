import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 }, // Adjust the duration as needed
  },
}

const AboutMe = () => {
  return (
    <motion.div
      className="mt-10 px-8 flex justify-start flex-col gap-10 h-screen"
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      variants={fadeInAnimationVariants}
    >
      <h1 className="font-poppins text-7xl font-600">About Me</h1>
      <div className="flex justify-between items-start gap-32">
        <p className="pt-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          laudantium doloremque blanditiis, eius id repudiandae voluptatibus
          magni sit eligendi praesentium, deserunt, quisquam corrupti atque
          libero placeat iusto odit voluptate architecto tenetur. Aperiam,
          recusandae? Rerum deserunt delectus sed quasi, dicta a ipsa doloribus
          quis aliquid doloremque nihil voluptates. Natus blanditiis provident
          tempore. Ipsum dolorem iusto officia deserunt aperiam quae dolorum sit
          odit praesentium delectus rerum dolore provident atque, perferendis
          doloribus perspiciatis voluptatem necessitatibus itaque a laudantium
          explicabo deleniti, similique vero magni. Assumenda autem voluptatum
          obcaecati beatae, inventore debitis ducimus nesciunt illum aspernatur
          nam sint. Alias iure maxime illum eos mollitia iste optio sequi sunt,
          odio numquam nihil dicta ut modi ullam eius quisquam itaque delectus
          ad voluptatibus incidunt soluta qui! Doloremque modi magnam autem
          dolores nulla, pariatur dignissimos suscipit culpa ut neque laborum
          vero distinctio officiis quam non voluptate nesciunt, veritatis
          quidem! Ipsa consequuntur velit cum blanditiis accusamus quidem atque
          quia ratione minima repellat itaque tempora enim dolor exercitationem
          voluptatibus, eligendi a ullam ab ad animi voluptas neque. Voluptatum
          aut dolore eum eveniet neque nulla laboriosam beatae rerum assumenda
          officiis nihil id, nesciunt eos et veritatis ipsum cum minima debitis
          eligendi fugit soluta magnam. Non illo in aliquid quidem ea sapiente?
        </p>
        <div className="w-[4000px] aspect-square bg-primary"></div>
      </div>
    </motion.div>
  )
}

export default AboutMe
