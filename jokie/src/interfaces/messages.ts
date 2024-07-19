export interface MessagesProps {
  messages: Messages[];
}

export interface Messages {
  typeJoke?: string;
  setup?: string;
  punchline?: string;
}
