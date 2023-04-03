export default interface Style {
    value: string;
    mediaQuery?: string;
}

export type Styles = { [key: string]: Style };
