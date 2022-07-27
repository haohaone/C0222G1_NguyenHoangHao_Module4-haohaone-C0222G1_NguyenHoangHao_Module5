INSERT INTO type_customer(type) value
('Diamond'),
('Platinum'),
('Gold'),
('Silver'),
('Member');

INSERT INTO customer value
('CU-0001', 'Đà Nẵng', '1999-07-08', '201787802', 'Nguyễn Hoàng Hảo', 0, 1),
('CU-0002', 'Đà Nẵng', '1999-08-13', '123123123', 'Nguyễn Thảo Uyên',0, 2),
('CU-0003', 'Quảng Nam', '2003-07-18', '875434223', 'Nguyễn Duy Trung',0, 3),
('CU-0004', 'Quảng Bình', '1996-09-15', '890321653', 'Trần Mạnh Cường',0, 4),
('CU-0005', 'Đà Nẵng', '1998-12-22', '674231256', 'Trần Xuân Trường',0, 5),
('CU-0006', 'Đà Nẵng', '1997-03-11', '765945908', 'Nguyễn Bảo Long',0, 4),
('CU-0007', 'Hội An', '2001-01-25', '753456123', 'Huỳnh Kim Hiếu',0, 5);

INSERT INTO facility value
('FA-0001', 70, 3, 'Hot Spring Retreat - Twin',0,
 'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-10%2Fhot-spring-retreat-twin-other-image.jpg&w=640&q=75', 'Mountain view'),
    ('FA-0002', 50, 2, 'Hot Spring Retreat - Twin',0,
     'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-11%2Fhot-spring-retreat-king-hero-image.jpg&w=640&q=75', 'Mountain view'),
    ('FA-0003', 70, 3, 'Hot Spring Retreat - Twin',0,
     'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-11%2Fhot-spring-pool-villa-hero-image.jpg&w=640&q=75', 'Garden view'),
    ('FA-0004', 500, 50, 'Kids Club',0,
     'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-10%2Ffacilities-kids-club.jpg&w=640&q=75', 'Room view'),
    ('FA-0005', 800, 100, 'Meeting Room',0,
     'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-10%2Ffacilities-meeting-room.jpg&w=640&q=75', 'Room view'),
    ('FA-0006', 800, 70, 'Fitness Club',0,
     'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-10%2Ffacilities-fitness-club.jpg&w=640&q=75', 'Room view'),
    ('FA-0007', 400, 30, 'Yoga club',0,
     'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-10%2Ffacilities-yoga-room.jpg&w=640&q=75', 'Garden view'),
('FA-0008', 700, 100, 'Yoga club',0,
    'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-10%2Fother-3_0.jpg&w=1080&q=75', 'Room view'),
('FA-0009', 300, 30, 'Tea Club',0,
    'https://www.banyantree.com/_next/image?url=https%3A%2F%2Fwww.banyantree.
com%2Fassets%2F2021-10%2Fsanctuaries-3_0.jpg&w=1080&q=75', 'Room view');

INSERT INTO contract VALUE
(1, 2000, '2022-07-13','2022-08-15',0, 6000, 'CU-0001', 'FA-0001'),
(2, 3000, '2022-07-14','2022-08-23', 0,9000, 'CU-0002', 'FA-0002'),
(3, 2000, '2022-07-14','2022-08-11', 0,5000, 'CU-0003','FA-0003'),
(4, 1000, '2022-07-16','2022-08-03', 0,3000, 'CU-0004', 'FA-0004'),
(5, 8000, '2022-07-23','2022-08-06', 0,20000, 'CU-0005', 'FA-0005'),
(6, 5000, '2022-07-15','2022-08-12', 0,11000, 'CU-0006', 'FA-0006'),
(7, 4000, '2022-07-17','2022-08-29', 0,12000, 'CU-0007', 'FA-0007'),
(8, 3000, '2022-07-18','2022-08-30', 0,9000, 'CU-0001', 'FA-0008'),
(9, 1500, '2022-07-20','2022-08-19', 0,6000, 'CU-0002', 'FA-0009');