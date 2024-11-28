import { useTranslations } from 'next-intl';
import Header from '@/components/header';

export default function Home() {
    const t = useTranslations();

    return (
        <main>
            <Header />
            <div>{t('Welcome')}</div>
        </main>
    )
}