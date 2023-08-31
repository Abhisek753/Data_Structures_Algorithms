
#include<bits/stdc++.h>
// #include<iostream>

using namespace std;



// int main(){
//     // int a=123;
//     // cout <<a <<endl;

//     // char b = 'v';
//     // cout << b <<endl;

//     // bool bl=true;
//     // cout <<bl<<endl;

//     //  float f=1.2;
//     //  cout <<f <<endl;

//     //  double d=1.23;
//     //  cout<<d<<endl;

//     //  int size=sizeof(a);
//     //  cout <<"Size of a is :"<<size<<endl;

//     int a='a';
//     cout <<a<<endl;

//     char ch=98;
//     cout <<ch<<endl;

//     char ch1=123456;
//     cout << ch1 <<endl;
// }
int findMax(const vector<int>& arr) {
    int maxElement = arr[0]; 
    
    for (int i = 1; i < arr.size(); ++i) {
        if (arr[i] > maxElement) {
            maxElement = arr[i]; 
        }
    }
    
    return maxElement;
}
int main() {
    int n;
    cout << "Enter the number of elements: ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter the elements:\n";
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }
    
    int maxElement = findMax(arr);
    cout << "The maximum element in the array is: " << maxElement << endl;
    
    return 0;
}