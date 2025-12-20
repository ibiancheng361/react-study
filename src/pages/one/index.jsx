

import TwoLayout from '@/layout/two';

// Two.js
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';  // 使用 Outlet 而不是 Routes
// import TwoLayout from '@/layout/two';

function Two() {
    return (
        <Suspense fallback={<div>加载中...</div>}>
            <TwoLayout>
                {/* Outlet 会自动渲染匹配的子路由 */}
                <Outlet />
            </TwoLayout>
        </Suspense>
    );
}

// export default Two;
export default Two;