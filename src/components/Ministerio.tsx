import { Container, Grid, SimpleGrid } from "@mantine/core";
import { MinisterioItem } from "./MinisteriosItem";

const data = [
  {
    image: "/public/iglesia.jpeg",
    title: "Ministerio Juvenil",
    category: "Aqui va un breve resumen de lo que trata",
  },
  {
    image: "/public/foto-maranatha2.jpg",
    title: "Ministerio #2",
    category: "Aqui va un breve resumen de lo que trata",
  },
  {
    image: "/public/danza.jpeg",
    title: "Ministerio #3",
    category: "Aqui va un breve resumen de lo que trata",
  },
  {
    image: "/public/iglesia3.jpeg",
    title: "Ministerio #4",
    category: "Aqui va un breve resumen de lo que trata",
  },
];

const Ministerio = () => {
  const proyectosItem = data.map((item) => (
    <Grid.Col xs={12} sm={6} md={4} lg={3}>
      <MinisterioItem
        image={item.image}
        title={item.title}
        category={item.category}
      />
      {/* <ProyectsItem
        className=""
        image={item.image}
        link={item.link}
        title={item.title}
        description={item.description}
        rating={item.rating}
        author={{ name: item.author.name, image: item.author.image }}
      /> */}
    </Grid.Col>
  ));

  return (
    <div className="mt-20 py-10 bg-gray-50 w-full max-w-full">
      <Container my="md">
        <SimpleGrid
          cols={1}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <h1 className="flex text-xl font-extrabold justify-center text-red-800">
            MINISTERIOS
          </h1>
          <Grid>{proyectosItem} </Grid>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Ministerio;
