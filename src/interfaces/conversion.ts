export interface ConversionFunction{
	(source: number): number
}

export interface ConversionUnit {
	id: string,
	convertFromDefault: ConversionFunction,
	convertToDefault: ConversionFunction
}

export interface ConversionType {
	id: string,
	icon: string,
	units: ConversionUnit[],
	default: string
}