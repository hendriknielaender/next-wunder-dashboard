// Code generated by wunderctl. DO NOT EDIT.

export interface LinkDefinition {
	targetType: string;
	targetFieldName: string;
	sourceField: string;
	argumentSources: LinkFieldArgumentSourceDefinition[];
}

export interface LinkFieldArgumentSourceDefinition {
	name: string;
	type: "objectField" | "fieldArgument";
	path: string[];
}

class LinkBuilder<T, R extends {} = {}, TT = {}> {
	// @ts-ignore
	constructor(current: R = {}, sourceField: string, targetType: string, targetField: string) {
		this.current = current;
		this.sourceField = sourceField;
		this.targetType = targetType;
		this.targetField = targetField;
	}

	private readonly sourceField: string;
	private readonly targetType: string;
	private readonly targetField: string;

	// @ts-ignore
	private current: R = {};

	argument<P extends Exclude<keyof T, keyof R>, V extends T[P], S extends "fieldArgument" | "objectField">(
		key: P,
		source: S,
		value: S extends "fieldArgument" ? string : TT,
		...extraPath: string[]
	) {
		const extra: {} = { [key]: { source, path: [value, ...extraPath] } };

		const instance = {
			...(this.current as object),
			...extra,
		} as R & Pick<T, P>;

		return new LinkBuilder<T, R & Pick<T, P>, TT>(instance, this.sourceField, this.targetType, this.targetField);
	}

	build = (): LinkDefinition => {
		const args = this.current as { [key: string]: { path: string[]; source: "fieldArgument" | "objectField" } };
		return {
			argumentSources: Object.keys(args).map((key) => ({
				name: key,
				type: args[key].source,
				path: args[key].path,
			})),
			targetType: this.targetType,
			sourceField: this.sourceField,
			targetFieldName: this.targetField,
		};
	};
}

export const sourceStep = <T extends {}, R extends {}>() => ({
	source: <F extends keyof T>(field: F) => {
		return targetStep<T, F, R>(field);
	},
});

const targetStep = <T, F extends keyof T, R>(field: F) => ({
	target: <r extends keyof R>(targetType: r, targetField: string) => {
		return new LinkBuilder<T[F], {}, R[r]>({}, field as string, targetType as string, targetField);
	},
});

interface TargetTypes {
	spacex_Address: "address" | "city" | "state" | "_join";
	spacex_Capsule:
		| "dragon"
		| "id"
		| "landings"
		| "missions"
		| "original_launch"
		| "reuse_count"
		| "status"
		| "type"
		| "_join";
	spacex_CapsuleMission: "flight" | "name" | "_join";
	spacex_Core:
		| "asds_attempts"
		| "asds_landings"
		| "block"
		| "id"
		| "missions"
		| "original_launch"
		| "reuse_count"
		| "rtls_attempts"
		| "rtls_landings"
		| "status"
		| "water_landing"
		| "_join";
	spacex_CoreMission: "flight" | "name" | "_join";
	spacex_Distance: "feet" | "meters" | "_join";
	spacex_Dragon:
		| "active"
		| "crew_capacity"
		| "description"
		| "diameter"
		| "dry_mass_kg"
		| "dry_mass_lb"
		| "first_flight"
		| "heat_shield"
		| "height_w_trunk"
		| "id"
		| "launch_payload_mass"
		| "launch_payload_vol"
		| "name"
		| "orbit_duration_yr"
		| "pressurized_capsule"
		| "return_payload_mass"
		| "return_payload_vol"
		| "sidewall_angle_deg"
		| "thrusters"
		| "trunk"
		| "type"
		| "wikipedia"
		| "_join";
	spacex_DragonHeatShield: "dev_partner" | "material" | "size_meters" | "temp_degrees" | "_join";
	spacex_DragonPressurizedCapsule: "payload_volume" | "_join";
	spacex_DragonThrust: "amount" | "fuel_1" | "fuel_2" | "pods" | "thrust" | "type" | "_join";
	spacex_DragonTrunk: "cargo" | "trunk_volume" | "_join";
	spacex_DragonTrunkCargo: "solar_array" | "unpressurized_cargo" | "_join";
	spacex_Force: "kN" | "lbf" | "_join";
	spacex_HistoriesResult: "data" | "result" | "_join";
	spacex_History: "details" | "event_date_unix" | "event_date_utc" | "flight" | "id" | "links" | "title" | "_join";
	spacex_Info:
		| "ceo"
		| "coo"
		| "cto"
		| "cto_propulsion"
		| "employees"
		| "founded"
		| "founder"
		| "headquarters"
		| "launch_sites"
		| "links"
		| "name"
		| "summary"
		| "test_sites"
		| "valuation"
		| "vehicles"
		| "_join";
	spacex_InfoLinks: "elon_twitter" | "flickr" | "twitter" | "website" | "_join";
	spacex_Landpad:
		| "attempted_landings"
		| "details"
		| "full_name"
		| "id"
		| "landing_type"
		| "location"
		| "status"
		| "successful_landings"
		| "wikipedia"
		| "_join";
	spacex_Launch:
		| "details"
		| "id"
		| "is_tentative"
		| "launch_date_local"
		| "launch_date_unix"
		| "launch_date_utc"
		| "launch_site"
		| "launch_success"
		| "launch_year"
		| "links"
		| "mission_id"
		| "mission_name"
		| "rocket"
		| "ships"
		| "static_fire_date_unix"
		| "static_fire_date_utc"
		| "telemetry"
		| "tentative_max_precision"
		| "upcoming"
		| "_join";
	spacex_LaunchLinks:
		| "article_link"
		| "flickr_images"
		| "mission_patch"
		| "mission_patch_small"
		| "presskit"
		| "reddit_campaign"
		| "reddit_launch"
		| "reddit_media"
		| "reddit_recovery"
		| "video_link"
		| "wikipedia"
		| "_join";
	spacex_LaunchRocket: "fairings" | "first_stage" | "rocket" | "rocket_name" | "rocket_type" | "second_stage" | "_join";
	spacex_LaunchRocketFairings: "recovered" | "recovery_attempt" | "reused" | "ship" | "_join";
	spacex_LaunchRocketFirstStage: "cores" | "_join";
	spacex_LaunchRocketFirstStageCore:
		| "block"
		| "core"
		| "flight"
		| "gridfins"
		| "land_success"
		| "landing_intent"
		| "landing_type"
		| "landing_vehicle"
		| "legs"
		| "reused"
		| "_join";
	spacex_LaunchRocketSecondStage: "block" | "payloads" | "_join";
	spacex_LaunchSite: "site_id" | "site_name" | "site_name_long" | "_join";
	spacex_LaunchTelemetry: "flight_club" | "_join";
	spacex_LaunchesPastResult: "data" | "result" | "_join";
	spacex_Launchpad:
		| "attempted_launches"
		| "details"
		| "id"
		| "location"
		| "name"
		| "status"
		| "successful_launches"
		| "vehicles_launched"
		| "wikipedia"
		| "_join";
	spacex_Link: "article" | "reddit" | "wikipedia" | "_join";
	spacex_Location: "latitude" | "longitude" | "name" | "region" | "_join";
	spacex_Mass: "kg" | "lb" | "_join";
	spacex_Mission:
		| "description"
		| "id"
		| "manufacturers"
		| "name"
		| "payloads"
		| "twitter"
		| "website"
		| "wikipedia"
		| "_join";
	spacex_MissionResult: "data" | "result" | "_join";
	spacex_Payload:
		| "customers"
		| "id"
		| "manufacturer"
		| "nationality"
		| "norad_id"
		| "orbit"
		| "orbit_params"
		| "payload_mass_kg"
		| "payload_mass_lbs"
		| "payload_type"
		| "reused"
		| "_join";
	spacex_PayloadOrbitParams:
		| "apoapsis_km"
		| "arg_of_pericenter"
		| "eccentricity"
		| "epoch"
		| "inclination_deg"
		| "lifespan_years"
		| "longitude"
		| "mean_anomaly"
		| "mean_motion"
		| "periapsis_km"
		| "period_min"
		| "raan"
		| "reference_system"
		| "regime"
		| "semi_major_axis_km"
		| "_join";
	spacex_Result: "totalCount" | "_join";
	spacex_Roadster:
		| "apoapsis_au"
		| "details"
		| "earth_distance_km"
		| "earth_distance_mi"
		| "eccentricity"
		| "epoch_jd"
		| "inclination"
		| "launch_date_unix"
		| "launch_date_utc"
		| "launch_mass_kg"
		| "launch_mass_lbs"
		| "longitude"
		| "mars_distance_km"
		| "mars_distance_mi"
		| "name"
		| "norad_id"
		| "orbit_type"
		| "periapsis_arg"
		| "periapsis_au"
		| "period_days"
		| "semi_major_axis_au"
		| "speed_kph"
		| "speed_mph"
		| "wikipedia"
		| "_join";
	spacex_Rocket:
		| "active"
		| "boosters"
		| "company"
		| "cost_per_launch"
		| "country"
		| "description"
		| "diameter"
		| "engines"
		| "first_flight"
		| "first_stage"
		| "height"
		| "id"
		| "landing_legs"
		| "mass"
		| "name"
		| "payload_weights"
		| "second_stage"
		| "stages"
		| "success_rate_pct"
		| "type"
		| "wikipedia"
		| "_join";
	spacex_RocketEngines:
		| "engine_loss_max"
		| "layout"
		| "number"
		| "propellant_1"
		| "propellant_2"
		| "thrust_sea_level"
		| "thrust_to_weight"
		| "thrust_vacuum"
		| "type"
		| "version"
		| "_join";
	spacex_RocketFirstStage:
		| "burn_time_sec"
		| "engines"
		| "fuel_amount_tons"
		| "reusable"
		| "thrust_sea_level"
		| "thrust_vacuum"
		| "_join";
	spacex_RocketLandingLegs: "material" | "number" | "_join";
	spacex_RocketPayloadWeight: "id" | "kg" | "lb" | "name" | "_join";
	spacex_RocketSecondStage: "burn_time_sec" | "engines" | "fuel_amount_tons" | "payloads" | "thrust" | "_join";
	spacex_RocketSecondStagePayloadCompositeFairing: "diameter" | "height" | "_join";
	spacex_RocketSecondStagePayloads: "composite_fairing" | "option_1" | "_join";
	spacex_RocketsResult: "data" | "result" | "_join";
	spacex_Ship:
		| "abs"
		| "active"
		| "attempted_landings"
		| "class"
		| "course_deg"
		| "home_port"
		| "id"
		| "image"
		| "imo"
		| "missions"
		| "mmsi"
		| "model"
		| "name"
		| "position"
		| "roles"
		| "speed_kn"
		| "status"
		| "successful_landings"
		| "type"
		| "url"
		| "weight_kg"
		| "weight_lbs"
		| "year_built"
		| "_join";
	spacex_ShipLocation: "latitude" | "longitude" | "_join";
	spacex_ShipMission: "flight" | "name" | "_join";
	spacex_ShipsResult: "data" | "result" | "_join";
	spacex_Volume: "cubic_feet" | "cubic_meters" | "_join";
	weather_City: "coord" | "country" | "id" | "name" | "weather" | "_join";
	weather_Clouds: "all" | "humidity" | "visibility" | "_join";
	weather_Coordinates: "lat" | "lon" | "_join";
	weather_Summary: "description" | "icon" | "title" | "_join";
	weather_Temperature: "actual" | "feelsLike" | "max" | "min" | "_join";
	weather_Weather: "clouds" | "summary" | "temperature" | "timestamp" | "wind" | "_join";
	weather_Wind: "deg" | "speed" | "_join";
	countries_Continent: "code" | "countries" | "name" | "_join";
	countries_Country:
		| "awsRegion"
		| "capital"
		| "code"
		| "continent"
		| "currencies"
		| "currency"
		| "emoji"
		| "emojiU"
		| "languages"
		| "name"
		| "native"
		| "phone"
		| "phones"
		| "states"
		| "subdivisions"
		| "_join";
	countries_Language: "code" | "name" | "native" | "rtl" | "_join";
	countries_State: "code" | "country" | "name" | "_join";
	countries_Subdivision: "code" | "emoji" | "name" | "_join";
	notes_QueryNoteById: "id" | "text" | "_join";
	notes_MutationNewNote: "id" | "_join";
}

interface SourceFields {
	spacex_capsule: {
		id: null;
	};
	spacex_capsules: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_capsulesPast: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_capsulesUpcoming: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_company: {};
	spacex_core: {
		id: null;
	};
	spacex_cores: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_coresPast: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_coresUpcoming: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_dragon: {
		id: null;
	};
	spacex_dragons: {
		limit: null;
		offset: null;
	};
	spacex_histories: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_historiesResult: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_history: {
		id: null;
	};
	spacex_landpad: {
		id: null;
	};
	spacex_landpads: {
		limit: null;
		offset: null;
	};
	spacex_launch: {
		id: null;
	};
	spacex_launchLatest: {
		offset: null;
	};
	spacex_launchNext: {
		offset: null;
	};
	spacex_launches: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launchesPast: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launchesPastResult: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launchesUpcoming: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_launchpad: {
		id: null;
	};
	spacex_launchpads: {
		limit: null;
		offset: null;
	};
	spacex_mission: {
		id: null;
	};
	spacex_missions: {
		find: null;
		limit: null;
		offset: null;
	};
	spacex_missionsResult: {
		find: null;
		limit: null;
		offset: null;
	};
	spacex_payload: {
		id: null;
	};
	spacex_payloads: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_roadster: {};
	spacex_rocket: {
		id: null;
	};
	spacex_rockets: {
		limit: null;
		offset: null;
	};
	spacex_rocketsResult: {
		limit: null;
		offset: null;
	};
	spacex_ship: {
		id: null;
	};
	spacex_ships: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	spacex_shipsResult: {
		find: null;
		limit: null;
		offset: null;
		order: null;
		sort: null;
	};
	weather_getCityById: {
		config: null;
		id: null;
	};
	weather_getCityByName: {
		config: null;
		country: null;
		name: null;
	};
	countries_continent: {
		code: null;
	};
	countries_continents: {
		filter: null;
	};
	countries_countries: {
		filter: null;
	};
	countries_country: {
		code: null;
	};
	countries_language: {
		code: null;
	};
	countries_languages: {
		filter: null;
	};
	notes_noteByID: {
		noteID: null;
	};
}

const linkBuilder = sourceStep<SourceFields, TargetTypes>();
export default linkBuilder;
