import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Container,
  rem,
} from "@mantine/core";

// const mockdata = [
//   {
//     title: "Extreme performance",
//     description:
//       "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
//     icon: IconGauge,
//   },
//   {
//     title: "Privacy focused",
//     description:
//       "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
//     icon: IconUser,
//   },
//   {
//     title: "No third parties",
//     description:
//       "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
//     icon: IconCookie,
//   },
// ];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,
    paddingInline: rem(130),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
      paddingInline: rem(10),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "#db2727",
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function WelcomeHome() {
  const { classes } = useStyles();
  //   const features = mockdata.map((feature) => (
  //     <Card
  //       key={feature.title}
  //       shadow="md"
  //       radius="md"
  //       className={classes.card}
  //       padding="xl"
  //     >
  //       <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
  //       <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
  //         {feature.title}
  //       </Text>
  //       <Text fz="sm" c="dimmed" mt="sm">
  //         {feature.description}
  //       </Text>
  //     </Card>
  //   ));

  return (
    <Container size="md" py="xl" className="mt-10 mb-14">
      <Group position="center">
        <Badge variant="filled" size="lg" sx={{ backgroundColor: "#991b1b" }}>
          Bienvenidos
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Nos complace enormemente darles la más cordial bienvenida a nuestra
        comunidad de fe
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Es un honor y un privilegio tenerlos aquí con nosotros en este día
        especial. En Maranatha, creemos en el poder transformador del amor de
        Dios y estamos emocionados de compartirlo con cada uno de ustedes.
      </Text>

      {/* <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
        sx={{ backgroundColor: "#510c0c" }}
      >
        {features}
      </SimpleGrid> */}
    </Container>
  );
}
