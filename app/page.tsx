"use client";

import { Button, Card, Heading, Typography } from "@ensdomains/thorin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="max-w-md">
        <Heading>Thorin</Heading>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          efficitur elementum velit, ut lobortis orci.
        </Typography>
        <Button>Do nothing</Button>
      </Card>
    </main>
  );
}
