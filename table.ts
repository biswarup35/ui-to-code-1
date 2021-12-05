type Table = {
  plan: string;
  remark: string;
  price: number;
  features: {
    name: string;
    access: boolean;
  }[];
}[];

const table: Table = [
  {
    plan: "Basic",
    remark: "Most Popular",
    price: 60,
    features: [
      {
        name: "Unlimited products",
        access: true,
      },
      {
        name: "Unlimited updates",
        access: true,
      },
      {
        name: "Custom permissions",
        access: false,
      },
      {
        name: "Custom infrastructure",
        access: false,
      },
      {
        name: "Custom design",
        access: false,
      },
      {
        name: "Custom feature",
        access: false,
      },
    ],
  },
  {
    plan: "Professional",
    remark: "Recommended",
    price: 90,
    features: [
      {
        name: "Unlimited products",
        access: true,
      },
      {
        name: "Unlimited updates",
        access: true,
      },
      {
        name: "Custom permissions",
        access: true,
      },
      {
        name: "Custom infrastructure",
        access: true,
      },
      {
        name: "Custom design",
        access: false,
      },
      {
        name: "Custom feature",
        access: false,
      },
    ],
  },
  {
    plan: "Enterprise",
    remark: "Best Value",
    price: 120,
    features: [
      {
        name: "Unlimited products",
        access: true,
      },
      {
        name: "Unlimited updates",
        access: true,
      },
      {
        name: "Custom permissions",
        access: true,
      },
      {
        name: "Custom infrastructure",
        access: true,
      },
      {
        name: "Custom design",
        access: true,
      },
      {
        name: "Custom feature",
        access: true,
      },
    ],
  },
];
export { table };
