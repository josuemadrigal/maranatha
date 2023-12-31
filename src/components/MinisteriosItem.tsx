import { createStyles, Paper, Text, Title, Button, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#510c0c60",
    backgroundBlendMode: "overlay",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
  category: string;
}

export function MinisterioItem({
  image,
  title,
  category,
}: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
      </div>
      <Button
        variant="filled"
        color=""
        sx={{
          width: "100%",
          ":hover": { backgroundColor: "#991b1b", borderRadius: "10px" },
        }}
      >
        Saber más
      </Button>
    </Paper>
  );
}
