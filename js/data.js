const productsData = {
    'ecocharge-pro': {
        name: 'EcoCharge Pro',
        price: '$599.00',
        power: '7.4kW',
        image: 'https://images.pexels.com/photos/5391511/pexels-photo-5391511.jpeg',
        description: 'The EcoCharge Pro is designed for the modern smart home. With built-in Wi-Fi, you can control charging sessions remotely, monitor energy usage, and schedule charging for off-peak hours to save money.',
        features: [
            '7.4kW Charging Power',
            'Universal Type 2 Connector',
            'IP54 Weatherproof Rating',
            '3-Year Warranty'
        ],
        specs: {
            'Max Power Output': '7.4 kW (32A Single Phase)',
            'Connector Type': 'Type 2 (IEC 62196) Tethered Cable (5m)',
            'Connectivity': 'Wi-Fi (2.4GHz), Bluetooth 5.0',
            'User Interface': 'LED Status Ring, Mobile App',
            'Dimensions': '300mm x 200mm x 100mm',
            'Weight': '3.5 kg'
        }
    },
    'powerwall-box': {
        name: 'PowerWall Box',
        price: '$799.00',
        power: '11kW',
        image: 'assets/images/product-charger.png',
        description: 'High-performance charger designed for dual-motor vehicles and homes with three-phase power. It provides significantly faster charging speeds than standard wall boxes.',
        features: [
            '11kW Three-Phase Charging',
            'Tethered 7m Premium Cable',
            'Advanced Thermal Protection',
            'OZEV Grant Eligible'
        ],
        specs: {
            'Max Power Output': '11 kW (16A Three Phase)',
            'Connector Type': 'Type 2 (IEC 62196) Tethered Cable (7m)',
            'Connectivity': 'Ethernet, Wi-Fi, 4G LTE',
            'User Interface': 'OLED Display, Mobile App',
            'Dimensions': '450mm x 250mm x 150mm',
            'Weight': '5.2 kg'
        }
    },
    'nano-compact': {
        name: 'Nano Compact',
        price: '$899.00',
        power: '22kW',
        image: 'https://images.pexels.com/photos/32472661/pexels-photo-32472661.jpeg',
        description: 'The Nano Compact is the world\'s smallest 22kW rapid charger. Don\'t let its size fool you; it packs industry-leading power into a sleek, minimalist design that fits any driveway.',
        features: [
            '22kW Rapid Charging',
            'Ultra-Compact Minimalist Design',
            'IK10 Impact Resistance',
            'Dynamic Load Balancing'
        ],
        specs: {
            'Max Power Output': '22 kW (32A Three Phase)',
            'Connector Type': 'Type 2 Socket (Cable not included)',
            'Connectivity': 'Wi-Fi, Bluetooth, RFID',
            'User Interface': 'RGB LED Status, RFID Reader',
            'Dimensions': '200mm x 200mm x 80mm',
            'Weight': '2.1 kg'
        }
    },
    'solarsync-hub': {
        name: 'SolarSync Hub',
        price: '$949.00',
        power: '7.4kW',
        image: 'https://images.pexels.com/photos/10359906/pexels-photo-10359906.jpeg',
        description: 'The ultimate ecological charging solution. SolarSync Hub intelligently monitors your solar panel output and prioritizes the use of 100% green energy to charge your vehicle.',
        features: [
            'Solar Eco-Mode Integration',
            'Real-time Grid Monitoring',
            'Smart Tariff Scheduling',
            'G100 Export Limitation'
        ],
        specs: {
            'Max Power Output': '7.4 kW (32A Single Phase)',
            'Connector Type': 'Type 2 Socket',
            'Connectivity': 'Wi-Fi, RS485 (for CT clamps)',
            'User Interface': 'Mobile App, Web Dashboard',
            'Dimensions': '320mm x 220mm x 110mm',
            'Weight': '3.8 kg'
        }
    },
    'flexicharge': {
        name: 'FlexiCharge',
        price: '$299.00',
        power: '3.6kW',
        image: 'https://images.pexels.com/photos/27355829/pexels-photo-27355829.jpeg',
        description: 'The perfect travel companion. The FlexiCharge is a portable, rugged charger that allows you to charge from any standard domestic or industrial socket while on the road.',
        features: [
            'Adjustable Power (6A-16A)',
            'IP67 Waterproof Rating',
            'Rugged Travel Bag Included',
            'No Installation Required'
        ],
        specs: {
            'Max Power Output': '3.6 kW (16A Single Phase)',
            'Connector Type': 'Type 2 to Schuko/UK 3-Pin',
            'Connectivity': 'OLED Status Screen',
            'User Interface': 'LCD Display, Selection Buttons',
            'Dimensions': '250mm x 100mm x 70mm',
            'Weight': '1.8 kg'
        }
    }
};

const installersData = {
    'spark-electric': {
        name: 'Spark Electric Solutions',
        location: 'San Francisco, CA',
        rating: '4.9',
        image: 'https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff',
        description: 'Spark Electric Solutions is a premier electrical contractor specializing in EV infrastructure. We are certified Tesla and ChargePoint installers with over a decade of residential experience. Our team ensures that your home is safe, your load is balanced, and your charging is seamless.',
        services: [
            'Tesla Wall Connector Installation',
            'Level 2 Home Charger Setup',
            'Electrical Panel Upgrades',
            'Smart Home Integration'
        ],
        contact: {
            phone: '+1 (555) 123-4567',
            email: 'hello@sparkelectric.com',
            website: 'www.sparkelectric.com'
        },
        reviews: [
            { user: 'Alice S.', rating: 5, comment: 'Punctual, professional, and did a great job with my Tesla charger.' },
            { user: 'Bob M.', rating: 4, comment: 'Very knowledgeable about local codes. Highly recommended.' }
        ]
    },
    'greenvolts': {
        name: 'GreenVolts Energy',
        location: 'Oakland, CA',
        rating: '4.8',
        image: 'https://ui-avatars.com/api/?name=Green+Volts&background=10B981&color=fff',
        description: 'GreenVolts Energy focuses on sustainable home energy solutions. We specialize in integrating EV chargers with existing solar arrays, ensuring you use the maximum amount of clean energy possible to power your journey.',
        services: [
            'Solar-to-EV Integration',
            'Battery Storage Solutions',
            'Energy Audits',
            'Commercial EV Infrastructure'
        ],
        contact: {
            phone: '+1 (555) 987-6543',
            email: 'info@greenvolts.energy',
            website: 'www.greenvolts.energy'
        },
        reviews: [
            { user: 'Charlie D.', rating: 5, comment: 'They helped me set up my SolarSync Hub perfectly. Amazing team!' }
        ]
    },
    'rapid-installers': {
        name: 'Rapid Installers Inc.',
        location: 'San Jose, CA',
        rating: '4.7',
        image: 'https://ui-avatars.com/api/?name=Mike+Smith&background=F59E0B&color=fff',
        description: 'Rapid Installers Inc. lives up to its name. we provide quick turn-around times while maintaining the highest safety standards. We support all major brands including Wallbox, JuiceBox, and more.',
        services: [
            'Next-Day Installation',
            'Charger Repair & Maintenance',
            'Load Management Consultation',
            'Permit Handling'
        ],
        contact: {
            phone: '+1 (555) 246-8101',
            email: 'service@rapidinstallers.com',
            website: 'www.rapidinstallers.com'
        },
        reviews: [
            { user: 'David W.', rating: 4, comment: 'Installed my PowerWall Box in record time. Very efficient.' }
        ]
    },
    'nextgen-electrical': {
        name: 'NextGen Electrical',
        location: 'Fremont, CA',
        rating: '5.0',
        image: 'https://ui-avatars.com/api/?name=Next+Gen&background=6366F1&color=fff',
        description: 'NextGen Electrical represents the future of residential wiring. We provide premium, high-end installation services for homeowners who want the best technology integrated perfectly into their lives.',
        services: [
            'Premium 22kW Installation',
            'Whole Home Panel Modernization',
            'Network-managed Charging Seutps',
            'Luxury Home Automation Integration'
        ],
        contact: {
            phone: '+1 (555) 135-7911',
            email: 'premium@nextgen.com',
            website: 'www.nextgen-electrical.com'
        },
        reviews: [
            { user: 'Eve R.', rating: 5, comment: 'Faultless execution. They integrated my Nano Compact beautifully.' }
        ]
    }
};
