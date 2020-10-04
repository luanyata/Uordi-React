import { IconButton, IPersonaSharedProps, Panel, Persona, PersonaPresence, PersonaSize, PrimaryButton, SearchBox, Stack } from "@fluentui/react";
import React from "react";
import { TestImages } from '@uifabric/example-data'
import { useBoolean } from '@uifabric/react-hooks';
import Card from "@uifabric/react-cards/lib/components/Card/Card";

const headerStyles = {
  height: "48px",
  background: "#2b579a",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

const logo = {
  color: "#fff",
  fontSize: 18,
  fontWeight: 700

}

const persona: IPersonaSharedProps = {
  imageUrl: TestImages.personaFemale,
  imageInitials: 'FL',
}

const Header: React.FC = () => {

  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  return (
    <>
      <Panel
        headerText="Minha Conta"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
        isBlocking={false}
      >
        <Card aria-label="Clickable horizontal card " horizontal >
          <Card.Item>
            <Persona {...persona} size={PersonaSize.size72} />
          </Card.Item>
        </Card>
      </Panel>

      <div style={headerStyles}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton iconProps={{ iconName: "WaffleOffice365" }} styles={{ root: { color: '#fff', marginLeft: 15, marginRight: 15 } }} title="Menu" ariaLabel="Menu" />
          <div style={logo}>Uordi</div>
        </div>

        <SearchBox placeholder="Pesquisar" styles={{ root: { width: 500, borderRadius: 5, background: "#bed1ee", borderColor: "#bed1ee" } }} />

        <div style={{ display: "flex" }}>
          <PrimaryButton iconProps={{ iconName: 'Diamond' }} style={{ background: "#2b579a", border: "#2b579a" }} text="Torne-se Premium" />
          <Persona {...persona}
            size={PersonaSize.size32}
            presence={PersonaPresence.online}
            imageAlt="Fernanda Lima" onClick={openPanel} />
        </div>
      </div>
    </>
  );
};

export default Header;
