import Button from "./components/Button";
import Card from "./components/Card";
import Container from "./components/Container";
import Grid from "./components/Grid";

function App() {
  const cards = [
    {
      id: 1,
      title: "Home",
      body: "Welcome home",
    },

    {
      id: 2,
      title: "About",
      body: "About us",
    },

    {
      id: 3,
      title: "Contact",
      body: "Get in touch",
    },
  ];

  return (
    <Container>
      <Grid>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            renderFooter={() => (
              <Button
                variant="secondary"
                onClick={() => alert(card.title)}
              >
                Click Me
              </Button>
            )}
          >
            <p>{card.body}</p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default App;