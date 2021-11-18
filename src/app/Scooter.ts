export interface Scooter {
    id: number,
    customer_id?: number,
    station_id?: number,
    lat_pos: number,
    lon_pos: number,
    active: boolean,
    speed_kph: number,
    battery_level: number,
    status: string
}