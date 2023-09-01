
#include<bits/stdc++.h>
// #include<iostream>

using namespace std;



int main(){
    // int a=123;
    // cout <<a <<endl;

    // char b = 'v';
    // cout << b <<endl;

    // bool bl=true;
    // cout <<bl<<endl;

    //  float f=1.2;
    //  cout <<f <<endl;

    //  double d=1.23;
    //  cout<<d<<endl;

    //  int size=sizeof(a);
    //  cout <<"Size of a is :"<<size<<endl;

    // int a='a';
    // cout <<a<<endl;

    // char ch=98;
    // cout <<ch<<endl;

    // char ch1=123456;
    // cout << ch1 <<endl;
     int sideLength;

    // Input the side length of the square
    std::cout << "Enter the side length of the square: ";
    std::cin >> sideLength;

    // Check for valid input
    if (sideLength <= 0) {
        std::cout << "Please enter a positive integer for side length." << std::endl;
        return 1; 
    }

    // Loop to print the square pattern
    for (int i = 0; i < sideLength; i++) {
        for (int j = 0; j < sideLength; j++) {
            std::cout << "* ";
        }
        std::cout << std::endl;
    }

    return 0; 
}