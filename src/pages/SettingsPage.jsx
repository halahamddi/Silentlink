import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { SETTINGS_CONTENT } from '../utils/constants';

const SettingsPage = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f4f4', fontFamily: 'Arial, sans-serif' }}>
            {/* 1. السايد بار بعرض ثابت */}
            <div style={{ width: '300px', height: '100vh', position: 'fixed' }}>
                <DashboardSidebar 
                    menuItems={['Dashboard', 'SOS management', 'Alerts']} 
                    activeMenuIndex={-1} 
                    activeFooterItem="settings"
                />
            </div>

            {/* 2. المحتوى مع زيادة المسافة عن السايد بار (marginLeft) */}
            <div style={{ flexGrow: 1, marginLeft: '320px', padding: '40px' }}>
                <div style={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #777777', 
                    borderRadius: '8px', 
                    minHeight: '85vh'
                }}>
                    
                    {/* Settings Title Container */}
                    <div style={{ 
                        padding: '15px 30px', 
                        borderBottom: '1px solid #777777',
                        marginTop: '10px'
                    }}>
                        <h1 style={{ fontSize: '24px', margin: 0, color: '#000', fontWeight: 'bold' }}>
                            {SETTINGS_CONTENT.title}
                        </h1>
                    </div>

                    {/* 3. General Tab - مع إضافة مسافة علوية (marginTop) لتبعد عن العنوان */}
                    <div style={{ display: 'flex', marginTop: '25px' }}> 
                        <div style={{ 
                            width: '164px', 
                            height: '41px', 
                            backgroundColor: '#49987A', 
                            color: '#000', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>
                            {SETTINGS_CONTENT.tabLabel}
                        </div>
                    </div>

                    {/* المربع الكبير (1084x198) مع ضبط المسافة فوقه */}
                    <div style={{ padding: '40px 30px' }}>
                        <div style={{ 
                            width: '1084px', 
                            height: '198px', 
                            border: '1px solid #777777', 
                            borderRadius: '4px',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}>
                            {/* System Preferences - كلام أسود */}
                            <div style={{ 
                                backgroundColor: '#49987A', 
                                color: '#000', 
                                padding: '15px 20px', 
                                fontSize: '18px',
                                fontWeight: 'bold',
                                borderBottom: '1px solid #777777'
                            }}>
                                {SETTINGS_CONTENT.sectionTitle}
                            </div>

                            {/* الصف الداخلي */}
                            <div style={{ 
                                flexGrow: 1, 
                                display: 'flex', 
                                alignItems: 'center', 
                                padding: '0 40px' 
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
                                    <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>
                                        {SETTINGS_CONTENT.fieldLabel}
                                    </span>
                                    
                                    {/* Every Month Button - كلام أسود */}
                                    <button style={{ 
                                        width: '244.13px', 
                                        height: '41px', 
                                        backgroundColor: '#49987A', 
                                        color: '#000', 
                                        border: '1px solid #CFC9C9', 
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: 'bold'
                                    }}>
                                        {SETTINGS_CONTENT.fieldValue}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SettingsPage;