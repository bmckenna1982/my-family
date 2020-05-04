export default {
  "events": [
    {
      title: 'Event Title',
      date: new Date(),
      startTime: '15:00',
      endTime: '16:30',
    },
  ],
  "lists": [
    {
      name: 'Groceries',
      open: false,
      items: [
        {
          itemName: 'Milk',
          checked: false
        },
        {
          itemName: 'Yogurt',
          checked: false
        },
        {
          itemName: 'Swiss Cheese',
          checked: false
        },
        {
          itemName: 'Coffee Creamer',
          checked: true
        }
      ]
    },
    {
      name: 'Home Improvement',
      open: false,
      items: [
        {
          itemName: 'Garden Edging',
          checked: false
        },
        {
          itemName: 'Mulch',
          checked: false
        },
        {
          itemName: 'PVC Primer',
          checked: true
        },
        {
          itemName: 'Sprinkler controller',
          checked: true
        },
      ]
    }
  ],
  "tasks": [
    {
      title: 'Feed the Dogs',
      points: '20',
      checked: false,
      completedBy: ''
    },
    {
      title: 'Take out trash',
      points: '20',
      checked: false,
      completedBy: ''
    },
    {
      title: 'Put away laundry',
      points: '20',
      checked: false,
      completedBy: ''
    },
    {
      title: 'Bathe Dogs',
      points: '100',
      checked: false,
      completedBy: ''
    },
    {
      title: 'mow the lawn',
      points: '50',
      checked: false,
      completedBy: ''
    },
    {
      title: 'Vacumn living room',
      points: '30',
      checked: false,
      completedBy: ''
    },
  ],
  "users": [
    {
      firstName: 'Brian',
      lastName: 'McKenna',
      email: 'myemail@here.com',
      points: '100'
    },
    {
      firstName: 'Keean',
      lastName: 'McKenna',
      email: 'myemail@here.com',
      points: '200'
    },
  ],
  "rewards": [
    {
      title: 'tier 1 reward',
      points: '200'
    },
    {
      title: 'tier 2 reward',
      points: '200'
    },
    {
      title: 'tier 3 reward',
      points: '200'
    },
  ]

}

