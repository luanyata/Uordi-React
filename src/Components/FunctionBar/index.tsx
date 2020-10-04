import { Pivot, PivotItem, Label, IconButton, IContextualMenuProps, CommandButton, Dropdown, DropdownMenuItemType, IDropdownOption } from '@fluentui/react';
import React from 'react'
import "office-ui-fabric-react/dist/css/fabric.css";

const redoUndo: IContextualMenuProps = {
    items: [
        {
            key: 'undo',
            text: 'Desfazer',
            iconProps: { iconName: 'Undo' },
        },
        {
            key: 'redo',
            text: 'Refazer',
            iconProps: { iconName: 'Redo' },
        },
    ],
    directionalHintFixed: true,
};

const copyPastCut: IContextualMenuProps = {
    items: [
        {
            key: 'undo',
            text: 'Recortar',
            iconProps: { iconName: 'cut' },
        },
        {
            key: 'redo',
            text: 'Copiar',
            iconProps: { iconName: 'Copy' },
        },
        {
            key: 'redo',
            text: 'Colar',
            iconProps: { iconName: 'Paste' },
        },
    ],
    directionalHintFixed: true,
}

const options: IDropdownOption[] = [
    { key: 'fontThemes', text: 'Fontes de Tema', itemType: DropdownMenuItemType.Header, },
    { key: 'arial', text: 'Arial' },
    { key: 'tnr', text: 'Times New Roman' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'recentlyUsedFonts', text: 'Fontes Usadas Recentimente', itemType: DropdownMenuItemType.Header },
    { key: 'helvetica', text: 'Helvética' },
    { key: 'times', text: 'Times' },
    { key: 'courierNew', text: 'Courier New' },
];

const proviteStyle = { display: "flex", height: 40, alignItems: "center" }

const FunctionBar: React.FC = () => {

    return (
        <Pivot aria-label="Funcionalidades">
            <PivotItem
                style={proviteStyle}
                headerText="Página Inicial">
                <IconButton
                    menuProps={redoUndo}
                    iconProps={{ iconName: "Undo" }}
                    title="Desfazer"
                    ariaLabel="Desfazer"
                />
                <IconButton
                    menuProps={copyPastCut}
                    iconProps={{ iconName: "PasteAsText" }}
                    title="Copiar"
                    ariaLabel="Copiar"
                />
                <IconButton
                    iconProps={{ iconName: "Brush" }}
                    title="Pincel de Formatação"
                    ariaLabel="Pincel de Formatação"
                />

                <Dropdown
                    defaultSelectedKey="arial"
                    options={options}
                    styles={{ dropdown: { width: 200 } }}
                />
            </PivotItem>
            <PivotItem style={proviteStyle} headerText="Inserir" >
                <CommandButton iconProps={{ iconName: "Table" }} text="Tabela" />
                <CommandButton iconProps={{ iconName: "FileImage" }} text="Imagem" />
                <CommandButton iconProps={{ iconName: "Link" }} text="Link" />
                <CommandButton iconProps={{ iconName: "CommentAdd" }} text="Novo Comentário" />
                <CommandButton iconProps={{ iconName: "Emoji2" }} text="Emoji" />
                <CommandButton iconProps={{ iconName: "VisualsStore" }} text="Suplementos" />
            </PivotItem>
            <PivotItem style={proviteStyle} headerText="Layout">
                <Label>Pivot #3</Label>
            </PivotItem>
            <PivotItem style={proviteStyle} headerText="Referências">
                <Label>Pivot #3</Label>
            </PivotItem>
            <PivotItem style={proviteStyle} headerText="Revisão">
                <Label>Pivot #3</Label>
            </PivotItem>
            <PivotItem style={proviteStyle} headerText="Exibir">
                <Label>Pivot #3</Label>
            </PivotItem>
            <PivotItem style={proviteStyle} headerText="Ajuda">
                <Label>Pivot #3</Label>
            </PivotItem>
        </Pivot>
    )
}

export default FunctionBar;