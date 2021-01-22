const customerDatas = [
    {
        id: 0,
        name: 'Sunny homestay',
        price: 10,
        address: 'Cát Linh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Empty',
    },
    {
        id: 1,
        name: 'Babylon Apt',
        price: 40,
        address: 'Hoàn Kiếm, Hà Nội, Việt Nam',
        created_at: '1/1/2020',
        description: 'Cảm giác thanh lịch và tự nhiên...',
        status: 'Empty',
    },
    {
        id: 2,
        name: 'Pan Pacific hotel',
        price: 100,
        address: 'Hà Nội, Việt Nam',
        created_at: '5/2/2020',
        description: 'Khách chỉ cách trung tâm thành phố vài phút...',
        status: 'Lended',
    },
    {
        id: 3,
        name: 'Goldentrip House IV',
        price: 50,
        address: 'Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Chào mừng bạn đến với nhà của chúng tôi...',
        status: 'Lended',
    },
    {
        id: 4,
        name: 'Panmi 5 hotel apartment',
        price: 80,
        address: 'Đống Đa, Hà Nội, Việt Nam',
        created_at: '12/12/2019',
        description: 'Nằm cách ga Hà Nội chưa đầy năm phút...',
        status: 'Empty',
    },
    {
        id: 5,
        name: 'Homestay in real Hanoi',
        price: 30,
        address: 'Thượng Thanh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Lended',
    },
    {
        id: 0,
        name: 'Sunny homestay',
        price: 10,
        address: 'Cát Linh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Empty',
    },
    {
        id: 1,
        name: 'Babylon Apt',
        price: 40,
        address: 'Hoàn Kiếm, Hà Nội, Việt Nam',
        created_at: '1/1/2020',
        description: 'Cảm giác thanh lịch và tự nhiên...',
        status: 'Empty',
    },
    {
        id: 2,
        name: 'Pan Pacific hotel',
        price: 100,
        address: 'Hà Nội, Việt Nam',
        created_at: '5/2/2020',
        description: 'Khách chỉ cách trung tâm thành phố vài phút...',
        status: 'Lended',
    },
    {
        id: 3,
        name: 'Goldentrip House IV',
        price: 50,
        address: 'Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Chào mừng bạn đến với nhà của chúng tôi...',
        status: 'Lended',
    },
    {
        id: 4,
        name: 'Panmi 5 hotel apartment',
        price: 80,
        address: 'Đống Đa, Hà Nội, Việt Nam',
        created_at: '12/12/2019',
        description: 'Nằm cách ga Hà Nội chưa đầy năm phút...',
        status: 'Empty',
    },
    {
        id: 5,
        name: 'Homestay in real Hanoi',
        price: 30,
        address: 'Thượng Thanh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Lended',
    },
    {
        id: 0,
        name: 'Sunny homestay',
        price: 10,
        address: 'Cát Linh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Empty',
    },
    {
        id: 1,
        name: 'Babylon Apt',
        price: 40,
        address: 'Hoàn Kiếm, Hà Nội, Việt Nam',
        created_at: '1/1/2020',
        description: 'Cảm giác thanh lịch và tự nhiên...',
        status: 'Empty',
    },
    {
        id: 2,
        name: 'Pan Pacific hotel',
        price: 100,
        address: 'Hà Nội, Việt Nam',
        created_at: '5/2/2020',
        description: 'Khách chỉ cách trung tâm thành phố vài phút...',
        status: 'Lended',
    },
    {
        id: 3,
        name: 'Goldentrip House IV',
        price: 50,
        address: 'Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Chào mừng bạn đến với nhà của chúng tôi...',
        status: 'Lended',
    },
    {
        id: 4,
        name: 'Panmi 5 hotel apartment',
        price: 80,
        address: 'Đống Đa, Hà Nội, Việt Nam',
        created_at: '12/12/2019',
        description: 'Nằm cách ga Hà Nội chưa đầy năm phút...',
        status: 'Empty',
    },
    {
        id: 5,
        name: 'Homestay in real Hanoi',
        price: 30,
        address: 'Thượng Thanh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Lended',
    },
    {
        id: 0,
        name: 'Sunny homestay',
        price: 10,
        address: 'Cát Linh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Empty',
    },
    {
        id: 1,
        name: 'Babylon Apt',
        price: 40,
        address: 'Hoàn Kiếm, Hà Nội, Việt Nam',
        created_at: '1/1/2020',
        description: 'Cảm giác thanh lịch và tự nhiên...',
        status: 'Empty',
    },
    {
        id: 2,
        name: 'Pan Pacific hotel',
        price: 100,
        address: 'Hà Nội, Việt Nam',
        created_at: '5/2/2020',
        description: 'Khách chỉ cách trung tâm thành phố vài phút...',
        status: 'Lended',
    },
    {
        id: 3,
        name: 'Goldentrip House IV',
        price: 50,
        address: 'Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Chào mừng bạn đến với nhà của chúng tôi...',
        status: 'Lended',
    },
    {
        id: 4,
        name: 'Panmi 5 hotel apartment',
        price: 80,
        address: 'Đống Đa, Hà Nội, Việt Nam',
        created_at: '12/12/2019',
        description: 'Nằm cách ga Hà Nội chưa đầy năm phút...',
        status: 'Empty',
    },
    {
        id: 5,
        name: 'Homestay in real Hanoi',
        price: 30,
        address: 'Thượng Thanh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Lended',
    },
    {
        id: 0,
        name: 'Sunny homestay',
        price: 10,
        address: 'Cát Linh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Empty',
    },
    {
        id: 1,
        name: 'Babylon Apt',
        price: 40,
        address: 'Hoàn Kiếm, Hà Nội, Việt Nam',
        created_at: '1/1/2020',
        description: 'Cảm giác thanh lịch và tự nhiên...',
        status: 'Empty',
    },
    {
        id: 2,
        name: 'Pan Pacific hotel',
        price: 100,
        address: 'Hà Nội, Việt Nam',
        created_at: '5/2/2020',
        description: 'Khách chỉ cách trung tâm thành phố vài phút...',
        status: 'Lended',
    },
    {
        id: 3,
        name: 'Goldentrip House IV',
        price: 50,
        address: 'Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Chào mừng bạn đến với nhà của chúng tôi...',
        status: 'Lended',
    },
    {
        id: 4,
        name: 'Panmi 5 hotel apartment',
        price: 80,
        address: 'Đống Đa, Hà Nội, Việt Nam',
        created_at: '12/12/2019',
        description: 'Nằm cách ga Hà Nội chưa đầy năm phút...',
        status: 'Empty',
    },
    {
        id: 5,
        name: 'Homestay in real Hanoi',
        price: 30,
        address: 'Thượng Thanh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Lended',
    },
    {
        id: 0,
        name: 'Sunny homestay',
        price: 10,
        address: 'Cát Linh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Empty',
    },
    {
        id: 1,
        name: 'Babylon Apt',
        price: 40,
        address: 'Hoàn Kiếm, Hà Nội, Việt Nam',
        created_at: '1/1/2020',
        description: 'Cảm giác thanh lịch và tự nhiên...',
        status: 'Empty',
    },
    {
        id: 2,
        name: 'Pan Pacific hotel',
        price: 100,
        address: 'Hà Nội, Việt Nam',
        created_at: '5/2/2020',
        description: 'Khách chỉ cách trung tâm thành phố vài phút...',
        status: 'Lended',
    },
    {
        id: 3,
        name: 'Goldentrip House IV',
        price: 50,
        address: 'Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Chào mừng bạn đến với nhà của chúng tôi...',
        status: 'Lended',
    },
    {
        id: 4,
        name: 'Panmi 5 hotel apartment',
        price: 80,
        address: 'Đống Đa, Hà Nội, Việt Nam',
        created_at: '12/12/2019',
        description: 'Nằm cách ga Hà Nội chưa đầy năm phút...',
        status: 'Empty',
    },
    {
        id: 5,
        name: 'Homestay in real Hanoi',
        price: 30,
        address: 'Thượng Thanh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Lended',
    },
    {
        id: 0,
        name: 'Sunny homestay',
        price: 10,
        address: 'Cát Linh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Empty',
    },
    {
        id: 1,
        name: 'Babylon Apt',
        price: 40,
        address: 'Hoàn Kiếm, Hà Nội, Việt Nam',
        created_at: '1/1/2020',
        description: 'Cảm giác thanh lịch và tự nhiên...',
        status: 'Empty',
    },
    {
        id: 2,
        name: 'Pan Pacific hotel',
        price: 100,
        address: 'Hà Nội, Việt Nam',
        created_at: '5/2/2020',
        description: 'Khách chỉ cách trung tâm thành phố vài phút...',
        status: 'Lended',
    },
    {
        id: 3,
        name: 'Goldentrip House IV',
        price: 50,
        address: 'Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Chào mừng bạn đến với nhà của chúng tôi...',
        status: 'Lended',
    },
    {
        id: 4,
        name: 'Panmi 5 hotel apartment',
        price: 80,
        address: 'Đống Đa, Hà Nội, Việt Nam',
        created_at: '12/12/2019',
        description: 'Nằm cách ga Hà Nội chưa đầy năm phút...',
        status: 'Empty',
    },
    {
        id: 5,
        name: 'Homestay in real Hanoi',
        price: 30,
        address: 'Thượng Thanh, Hà Nội, Việt Nam',
        created_at: '12/10/2020',
        description: 'Homestay của chúng tôi thực sự rất thoáng mát và yên tĩnh...',
        status: 'Lended',
    },
];

export default customerDatas;