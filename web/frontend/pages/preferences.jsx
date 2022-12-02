import { Card, Page, TextField, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {useState, useCallback} from 'react';

export default function Preferences() {
  const [value, setValue] = useState('Jaded Pixel');

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  return (
    <Page>
      <TitleBar
        title="Preferences"
        primaryAction={{
          content: "Save",
          onAction: () => console.log("Save"),
        }}
        secondaryActions={[
          {
            content: "Disable Scheme",
            onAction: () => console.log("Disable Scheme"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Preferences</Heading>
            <TextContainer>
            <TextField
              label="Scheme Name"
              value={value}
              onChange={handleChange}
              autoComplete="off"
            />
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
