export default interface Style {
    value: string;
    readableValue?: string;
    mediaQuery?: string;
}

export type Styles = { [key: string]: Style };
