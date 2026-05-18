
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../Component/ListedBooks/ListedReadList";
import ListedWishList from "../../Component/ListedBooks/ListedWishList";

const Books = () => {
    
    

    return (

        <div className="container mx-auto my-3">
           
          
            <Tabs>
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                   <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                      <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;