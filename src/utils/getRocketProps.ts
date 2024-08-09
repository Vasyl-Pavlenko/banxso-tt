import Rocket from '../types/Rocket';

export interface UnitSymbols {
  meter: string;
  feet: string;
  cubicMeter: string;
  cubicFeet: string;
  kilograms: string;
  pounds: string;
}

const unitSymbols: UnitSymbols = {
  meter: 'm',
  feet: 'ft',
  cubicMeter: 'm³',
  cubicFeet: 'ft³',
  kilograms: 'kg',
  pounds: 'lbs',
};

function formatVolume(cubicMeters: number, cubicFeet: number): string {
  return `${cubicMeters}${unitSymbols.cubicMeter} / ${cubicFeet}${unitSymbols.cubicFeet}`;
}

function formatMass(kg: number, lb: number): string {
  return `${kg}${unitSymbols.kilograms} / ${lb}${unitSymbols.pounds}`;
}

function getRocketProps(rocket: Rocket, detailed = false) {
  const props = [
    {
      name: 'Height',
      value: `${rocket.height_w_trunk.meters}${unitSymbols.meter} / ${rocket.height_w_trunk.feet}${unitSymbols.feet}`,
    },
    {
      name: 'Diameter',
      value: `${rocket.diameter.meters}${unitSymbols.meter} / ${rocket.diameter.feet}${unitSymbols.feet}`,
    },
    {
      name: 'Spacecraft volume',
      value: formatVolume(
        rocket.launch_payload_vol.cubic_meters,
        rocket.launch_payload_vol.cubic_feet,
      ),
    },
    {
      name: 'Trunk volume',
      value: formatVolume(
        rocket.trunk.trunk_volume.cubic_meters,
        rocket.trunk.trunk_volume.cubic_feet,
      ),
    },
    {
      name: 'Launch payload mass',
      value: formatMass(rocket.launch_payload_mass.kg, rocket.launch_payload_mass.lb),
    },
    {
      name: 'Return payload mass',
      value: formatMass(rocket.return_payload_mass.kg, rocket.return_payload_mass.lb),
    },
  ];

  if (detailed) {
    props.push(
      {
        name: 'Heat shield material',
        value: rocket.heat_shield.material,
      },
      {
        name: 'Heat shield temperature',
        value: rocket.heat_shield.temp_degrees.toString(),
      },
      {
        name: 'Pressurized capsule volume',
        value: formatVolume(
          rocket.pressurized_capsule.payload_volume.cubic_meters,
          rocket.pressurized_capsule.payload_volume.cubic_feet,
        ),
      },
      {
        name: 'Thrusters amount',
        value: rocket.thrusters.reduce((acc, thruster) => acc + thruster.amount, 0).toString(),
      },
      {
        name: 'Dry mass',
        value: formatMass(rocket.dry_mass_kg, rocket.dry_mass_lb),
      },
    );
  }

  return props;
}

export default getRocketProps;
