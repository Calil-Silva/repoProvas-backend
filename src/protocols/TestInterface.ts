interface Test {
    name: string;
    category: string;
    professor: string;
    subject: string;
    link: string;
    period: string;
}

interface NewTest {
    test_name_id: number;
    category_id: number;
    sub_pro_id: number;
    link: string;
    period_id: number;
}

export { Test, NewTest };
